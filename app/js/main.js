// const pauseTaskBtn = document.querySelector('.pause__task');
// const activateTaskBtn = document.querySelector('.activate__task');



// activateTaskBtn.addEventListener('click', function () {
//   pauseTaskBtn.classList.remove('hidden');
//   activateTaskBtn.classList.add('hidden');
// })


// pauseTaskBtn.addEventListener('click', function () {
//   activateTaskBtn.classList.remove('hidden');
//   pauseTaskBtn.classList.add('hidden');
// })

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