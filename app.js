window.addEventListener('keydown', function(event){
  console.log(event.keyCode);
  var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio)
    return;
  audio.currentTime = 0; 
  key.classList.add("playing");
  audio.play();
});

window.addEventListener('keyup', function(event){
  var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  key.classList.remove('playing');
})