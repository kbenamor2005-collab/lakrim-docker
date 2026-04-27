// Console élégante
console.log("✨ Lakrim Luxury Cars - Location de véhicules d'exception");

// Effet de transparence sur le menu au scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.backdropFilter = 'none';
        nav.style.boxShadow = 'none';
    }
});

// Réservation des véhicules de luxe
const boutons = document.querySelectorAll('.btn');

boutons.forEach(btn => {
    btn.addEventListener('click', function() {
        const carte = this.closest('.carte');
        const voiture = carte.querySelector('h3').textContent;
        const prix = carte.querySelector('.prix').textContent;
        
        alert(`✨ LAKRIM LUXURY CARS\n\nVéhicule : ${voiture}\nTarif : ${prix}\n\nNotre conseiller vous contactera sous 24h pour finaliser votre réservation.\n\n📞 +216 12 345 678`);
    });
});

// Formulaire de contact
const formulaire = document.querySelector('form');

if (formulaire) {
    formulaire.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('✅ Votre demande a été envoyée avec succès.\n\nUn conseiller Lakrim Luxury vous répondra dans les plus brefs délais.\n\nMerci de votre confiance.');
        formulaire.reset();
    });
}

// Animation douce au chargement
document.addEventListener('DOMContentLoaded', function() {
    const cartes = document.querySelectorAll('.carte');
    cartes.forEach((carte, index) => {
        carte.style.opacity = '0';
        carte.style.transform = 'translateY(20px)';
        setTimeout(() => {
            carte.style.transition = 'all 0.6s ease';
            carte.style.opacity = '1';
            carte.style.transform = 'translateY(0)';
        }, index * 100);
    });
});