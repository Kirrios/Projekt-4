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
