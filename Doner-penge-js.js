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





const progress = document.querySelector(".progress-done");
const input = document.querySelector(".input");
const maxInput = document.querySelector(".maxInput");

let finalValue = 0 ;
let max = 0;

function changeWidth(){
  progress.style.width =`${(finalValue / max) * 100} %`;
  progress.innerText = `${Math.ceil((finalValue / max) * 100)} %`;
}

input.addEventListener("keyup", function() {
  finalValue = parseInt (input.value, 10);
  changeWidth();
});

maxInput.addEventListener("keyup", function() {
  max = parseInt (maxInput.value, 10);
  changeWidth();
});