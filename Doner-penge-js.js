document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});

const filterButtons = document.querySelectorAll(".filter-btn");
const pengeItems = document.querySelectorAll(".penge-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filterValue = button.dataset.filter;

    pengeItems.forEach((item) => {
      if (filterValue === "alt" || item.classList.contains(filterValue)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});





// const progress = document.querySelector(".progress-done");
// const input = document.querySelector(".input");
// const maxInput = document.querySelector(".maxInput");

// let finalValue = 0 ;
// let max = 0;

// function changeWidth(){
//   progress.style.width =`${(finalValue / max) * 100} %`;
//   progress.innerText = `${Math.ceil((finalValue / max) * 100)} %`;
// }

// input.addEventListener("keyup", function() {
//   finalValue = parseInt (input.value, 10);
//   changeWidth();
// });

// maxInput.addEventListener("keyup", function() {
//   max = parseInt (maxInput.value, 10);
//   changeWidth();
// });

window.addEventListener('load', function() {
//  --- price tables (the goal and current status) ---
    let funds = [ {price: 100, reached: 20},
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