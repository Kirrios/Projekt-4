window.addEventListener('load', function() {
//  --- price tables (the goal and current status) ---
    let funds = [ {price: 400, reached: 200},
                  {price: 300, reached: 50},
                  {price: 300, reached: 0},
                ]

// --- Function looks at id and the calculated percentage, and resizes the bar to match ---
    function setBarAt(id,percentage, message){
        let s = document.getElementById(id);
        s.style.width = percentage + "%";
        s.parentElement.innerHTML += message;
    }
    
    // --- for every element in funds, calculate percentage and set it to the slider matching the array index... (remember to name ids with correct number) :) ---
    for (let i = 0; i < funds.length; i ++) {
        setBarAt("slider-" + (i+1), funds[i].reached/funds[i].price*100, funds[i].reached + "kr ud af " + funds[i].price + "kr");
        
    };
});