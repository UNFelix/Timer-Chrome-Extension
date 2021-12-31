const pauseBtns = document.querySelectorAll(".pause__task");
const playBtns = document.querySelectorAll(".activate__task");
const activitiesBtn = document.querySelector('.subheader__tasks');
const activitiesDropDown = document.querySelector('.activities');

pauseBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.previousElementSibling.classList.remove("hidden");
    this.classList.add("hidden");
  });
});

playBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.nextElementSibling.classList.remove("hidden");
    this.classList.add("hidden");
  });
});

activitiesBtn.addEventListener('click', function () {
  activitiesDropDown.classList.toggle('hidden');
})