function graph(){
    // Créer le graphique après avoir chargé les données 
    const ctx = document.getElementById('userChart').getContext('2d');
    const userChart = new Chart(ctx, {
        type: 'pie', // Type de graphique (vous pouvez le changer en 'line', 'pie', etc.)
        data: {
            labels: data.addresses.slice(0, 10), // Limiter à 10 adresses pour le graphique  
            datasets: [{
                label: 'Nombre d\'utilisateurs',
                data: data.addresses.slice(0, 10).map(() => 1), // Valeur fixe de 1 pour chaque adresse  
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1  
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true  
                }
            }
        }
    })
}