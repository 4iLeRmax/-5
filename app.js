var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});

let counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3){
    counter =1;
  }
}, 5000);

let menu = document.querySelector('.burger__menu');
let nav = document.querySelector('.navLinks');
menu.addEventListener('click', ()=>{
  nav.classList.toggle('active');
});
window.addEventListener('scroll', ()=>{
  nav.classList.remove('active');
});
// if (nav.classList.contains('active'){

// })