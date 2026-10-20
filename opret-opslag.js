window.addEventListener('load', function() {
    
    let c1 = document.querySelector('#content-1');
    let c2 = document.querySelector('#content-2');

    let b1 = document.querySelector('#button-1');
    let b2 = document.querySelector('#button-2');
    
    b1.addEventListener('click', function() {
        c1.style.display = "block";
        c2.style.display = "none";

        b1.className = "choice-button-selected";
        b2.className = "choice-button-unselected";
    });
    
    b2.addEventListener('click', function() {
        c1.style.display = "none";
        c2.style.display = "block";
        
        b1.className = "choice-button-unselected";
        b2.className = "choice-button-selected";
    });

});