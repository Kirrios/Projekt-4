window.addEventListener('load', function() {
    
    let c1 = document.querySelector('#content-1');
    let c2 = document.querySelector('#content-2');

    let b1 = document.querySelector('#button-1');
    let b2 = document.querySelector('#button-2');
    
    // --- read local storage and reload selected post settings. ---
    if (localStorage.getItem("valgt-opslag") == "tilskud") {
        c1.style.display = "block";
        c2.style.display = "none";
    
        b1.className = "choice-button-selected";
        b2.className = "choice-button-unselected";   
             
    } else {
        c1.style.display = "none";
        c2.style.display = "block";
        
        b1.className = "choice-button-unselected";
        b2.className = "choice-button-selected";
    }


    b1.addEventListener('click', function() {
        c1.style.display = "block";
        c2.style.display = "none";

        b1.className = "choice-button-selected";
        b2.className = "choice-button-unselected";

        
        localStorage.setItem("valgt-opslag", "tilskud");
    });
    
    b2.addEventListener('click', function() {
        c1.style.display = "none";
        c2.style.display = "block";
        
        b1.className = "choice-button-unselected";
        b2.className = "choice-button-selected";
        
        localStorage.setItem("valgt-opslag", "genstand");
    });
    
    // --- go to image selector ---
    
        document.querySelector("img.imagePlaceholder__box").addEventListener("click", function(){
            if (b1.className == "choice-button-unselected") {
                // --- if u are in the "genstand":
            window.location = "opslag-billeder-genstande.html";
            } else {
                window.location = "opslag-billeder-tilskud.html";
            }
        });




    // --- using last image saved in local storage ---

    let selectedImage = localStorage.getItem("selectedItem");

    if (selectedImage != undefined) {
        document.querySelector("img.imagePlaceholder__box").src=selectedImage;
    }


});
