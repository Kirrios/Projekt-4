let container = document.querySelector(".choose-a-donation-amount");
container.addEventListener("click", function(event){
    // console.log(event.target, event.target.parentNode.classList.contains("genstande-item"))
    // --- if clicked element contains the class "genstande-item": ---
    if (event.target.classList.contains("buttonsForDonations")) {
        
        // --- to do: remove class item-selected, from all other items ---
        let list = document.querySelectorAll(".item-selected");
        for (item of list){
            item.classList.remove("item-selected");
        };
        
        event.target.classList.add("item-selected");
        console.log("item-selectet")
    };
});
