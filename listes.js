import { graph } from "./graph.js";

async function listes() {
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        const userList = document.getElementById("userList");
        const searchBar = document.getElementById("searchBar");

        
        const selectAll = document.getElementById("selectAll");
        const selectYahoo = document.getElementById("selectYahoo");
        const selectGmail = document.getElementById("selectGmail");
        const selectHotmail = document.getElementById("selectHotmail");

        function updateList(filter = "") {
            userList.innerHTML = "";

            data.addresses
                .filter(email => email.includes(filter))
                .forEach(email => {
                    const li = document.createElement("li");

                    
                    const checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.value = email;
                    checkbox.classList.add("user-checkbox");

                    // Mise à jour du graphique quand on coche/décoche
                    checkbox.addEventListener("change", updateGraph);

                    // Ajout du texte de l'email
                    const label = document.createElement("span");
                    label.textContent = ` ${email}`;

                    // Ajout des éléments à la liste
                    li.appendChild(checkbox);
                    li.appendChild(label);
                    userList.appendChild(li);
                });

            updateGraph();
        }

        function updateGraph() {
            const selectedEmails = Array.from(document.querySelectorAll(".user-checkbox:checked"))
                .map(checkbox => checkbox.value);

            graph(selectedEmails); 
        }

        function selectByDomain(domain, isChecked) {
            document.querySelectorAll(".user-checkbox").forEach(checkbox => {
                if (checkbox.value.includes(domain)) {
                    checkbox.checked = isChecked;
                }
            });
            updateGraph();
        }

        
        selectAll.addEventListener("change", () => {
            const checked = selectAll.checked;
            document.querySelectorAll(".user-checkbox").forEach(checkbox => {
                checkbox.checked = checked;
            });
            updateGraph();
        });

        selectYahoo.addEventListener("change", () => selectByDomain("@yahoo.com", selectYahoo.checked));
        selectGmail.addEventListener("change", () => selectByDomain("@gmail.com", selectGmail.checked));
        selectHotmail.addEventListener("change", () => selectByDomain("@hotmail.com", selectHotmail.checked));

        updateList();

        // Ajout de l'événement sur la barre de recherche
        searchBar.addEventListener("input", (event) => {
            const filterValue = event.target.value.trim().toLowerCase();
            updateList(filterValue);
        });

        return data.addresses;
    } catch (error) {
        console.error("Erreur lors du chargement du fichier JSON:", error);
        return [];
    }
}

export { listes };
