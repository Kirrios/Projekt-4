let container = document.querySelector(".genstande-donation-grid");

// --- image selection ---
container.addEventListener("click", function(event){
    submitButton.classList.remove("brug-billede-inaktiv");
    // console.log(event.target, event.target.parentNode.classList.contains("genstande-item"))
    // --- if clicked element contains the class "genstande-item": ---
    if (event.target.classList.contains("genstande-item")) {
        
        // --- to do: remove class item-selected, from all other items ---
        let list = document.querySelectorAll(".item-selected");
        for (item of list){
            item.classList.remove("item-selected");
        };
        
        event.target.classList.add("item-selected");
        submitButton.classList.add("brug-billede-aktiv");
    };
});

// --- after selecting image, confirmation button activates ---

let submitButton = document.querySelector("#brug-billede");

submitButton.addEventListener("click", function() {
    let selected = document.querySelector(".item-selected");
    if (selected != undefined) {
        // console.log( selected.querySelector("img").src );
        localStorage.setItem("selectedItem", selected.src);

        // ---! ask for help !---
        window.location = "opret-opslag.html";
    }
});

