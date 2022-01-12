const pauseBtns = document.querySelectorAll(".pause__task");
const playBtns = document.querySelectorAll(".activate__task");
const activitiesBtn = document.querySelector('.subheader__tasks');
const activitiesDropDown = document.querySelector('.activities');
const projectsBtn = document.querySelector('.header__projects');
const projectsDropDown = document.querySelector('.projects');

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

projectsBtn.addEventListener('click', function () {
  projectsDropDown.classList.toggle('hidden');
})