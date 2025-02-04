function graph(emailList) {
    const domainCount = {};

    emailList.forEach(email => {
        const domain = email.split("@")[1];
        domainCount[domain] = (domainCount[domain] || 0) + 1;
    });

    const ctx = document.getElementById("userChart").getContext("2d");
    
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: Object.keys(domainCount),
            datasets: [{
                label: "Nombre d'utilisateurs par domaine",
                data: Object.values(domainCount),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

export { graph };
