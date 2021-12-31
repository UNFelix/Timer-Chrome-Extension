const pauseButtons = document.querySelectorAll(".pause__task");
const playButtons = document.querySelectorAll(".activate__task");

pauseButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.previousElementSibling.classList.remove("hidden");
    this.classList.add("hidden");
  });
});

playButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.nextElementSibling.classList.remove("hidden");
    this.classList.add("hidden");
  });
});