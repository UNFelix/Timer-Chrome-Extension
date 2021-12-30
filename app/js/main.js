const pauseTaskBtn = document.querySelector('.pause__task');
const activateTaskBtn = document.querySelector('.activate__task');

activateTaskBtn.addEventListener('click', function () {
  pauseTaskBtn.classList.remove('hidden')
  activateTaskBtn.classList.add('hidden')
})
pauseTaskBtn.addEventListener('click', function () {
  activateTaskBtn.classList.remove('hidden')
  pauseTaskBtn.classList.add('hidden')
})