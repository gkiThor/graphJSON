async function listes() {
    try {
        const response = await fetch("data.json");
        const data = await response.json();

        const userList = document.getElementById("userList");
        userList.innerHTML = ""; 

        
        data.addresses.forEach(email => {
            const li = document.createElement("li");
            li.textContent = email;
            userList.appendChild(li);
        });

        return data.addresses;
    } catch (error) {
        console.error("Erreur lors du chargement du fichier JSON:", error);
        return [];
    }
}

export { listes };
