function graph(emailList) {
    const domainCount = {};

    // Compter les occurrences de chaque domaine
    emailList.forEach(email => {
        const domain = email.split("@")[1];
        domainCount[domain] = (domainCount[domain] || 0) + 1;
    });

    const domains = Object.keys(domainCount);
    const counts = Object.values(domainCount);

    // Générer des couleurs dynamiques
    const backgroundColors = domains.map(() => `hsl(${Math.random() * 360}, 70%, 60%)`);
    const borderColors = backgroundColors.map(color => color.replace("60%", "40%"));

    const ctx = document.getElementById("userChart").getContext("2d");

    // Vérifier s'il y a déjà un graphique et le détruire avant d'en recréer un
    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: domains,
            datasets: [{
                label: "Nombre d'utilisateurs par domaine",
                data: counts,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "right"
                }
            }
        }
    });
}

export { graph };
