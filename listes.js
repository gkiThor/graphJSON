function listes(){

    console.log("Chargement du JSON");

    fetch('data.json').then(
        response => response.json()
    ).then(data =>{

        console.log(data)
        const userList = document.getElementById("userList");

        console.log("Parcour la liste data et ajoute dans li");

        data.addresses.forEach(email => {
            const li = document.createElement("li");
            li.textContent = email;
            userList.appendChild(li);

        });
    })
    .catch(error => console.error("Erreur chargement du fichier JSON:", error));
}

export{listes};