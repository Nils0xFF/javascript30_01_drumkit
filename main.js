window.addEventListener('keydown', playSound);

const audioTracks = document.querySelectorAll('audio');
audioTracks.forEach(audio => {
  // add the Transition to the corresponding div, when played
  audio.addEventListener('play', addTransition);
  // remove the Transition when the playback is paused
  audio.addEventListener('pause', removeTransition);
});

const keyDivs = document.querySelectorAll('.key');
keyDivs.forEach(key => {
    key.addEventListener('click', clickSound);
});


function playSound(event) {
  // select the audio element with the keyCode
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  // in case there is no audio for the pressed key audio will be undefined
  if (!audio) return;
  // rewind the audio
  audio.currentTime = 0;
  // play the audio
  audio.play();
}

function clickSound(){
    var keyPress = new Event('keypress');
    keyPress.keyCode = this.dataset.key;
    playSound(keyPress);
}

// adds the transion to the div
function addTransition(event) {
  document.querySelector(`div[data-key='${event.target.dataset.key}']`).classList.add('playing');
}

// removes the transition
function removeTransition(event){
  document.querySelector(`div[data-key='${event.target.dataset.key}']`).classList.remove('playing');
}
