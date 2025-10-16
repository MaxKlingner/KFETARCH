function changeQuantite(produitId, changement) {
    const input = document.getElementById(produitId);
    let quantite = parseInt(input.value) + changement;
    
    // Empêche les quantités négatives
    if (quantite < 0) quantite = 0;
    
    input.value = quantite;
    calculerTotal();
}

function calculerTotal() {
    let total = 0;
    
    // Parcourt tous les produits
    document.querySelectorAll('.commande-item').forEach(item => {
        const quantiteInput = item.querySelector('.quantite-input');
        const prixElement = item.querySelector('.prix');
        const prixUnitaire = parseFloat(prixElement.getAttribute('data-prix'));
        const quantite = parseInt(quantiteInput.value);
        
        // Calcule le sous-total pour ce produit
        const sousTotal = quantite * prixUnitaire;
        prixElement.textContent = sousTotal.toFixed(2) + ' €';
        
        total += sousTotal;
    });
    
    // Met à jour le total général
    document.getElementById('total-prix').textContent = total.toFixed(2) + ' €';
}

function validerCommande() {
    const total = parseFloat(document.getElementById('total-prix').textContent);
    
    if (total === 0) {
        alert('Veuillez sélectionner au moins un produit');
        return;
    }
    
    // Ici tu peux ajouter la logique pour envoyer la commande
    alert(`Commande validée ! Total : ${total.toFixed(2)} €`);
    
    // Réinitialiser la commande
    document.querySelectorAll('.quantite-input').forEach(input => {
        input.value = 0;
    });
    calculerTotal();
}

// Initialise le total au chargement
document.addEventListener('DOMContentLoaded', calculerTotal);
