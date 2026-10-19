document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});

const filterButtons = document.querySelectorAll(".filter-btn");
const genstandeItems = document.querySelectorAll(".genstande-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filterValue = button.dataset.filter;

    genstandeItems.forEach((item) => {
      if (filterValue === "alt" || item.classList.contains(filterValue)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
