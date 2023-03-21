//what is the key that has been hit? 
//Does it contain a keycode? e.g. 87
//Is there an audio element?
//if the key hit does not contain an audio file the statement does not return.
function playSound(e) {
    let audio;
    let key;

    if (e.type === 'keydown') {
        audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    } else if (e.type === 'click') {
        audio = document.querySelector(`audio[data-key="${e.currentTarget.getAttribute('data-key')}"]`);
        key = e.currentTarget;
    }

    if (!audio) return;


//next we add the playing class which corressponds to the elements on the webpage of the key 
//that is hit and makes an animation
    key.classList.toggle('playing');

//this sets the audio to play from the beginning every time the key is hit
    audio.currentTime = 0;
    audio.play();

}

//once the transitioned event occurs we call removeTransition function
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

//this adds the animation once the key is hit. 
//we need to remove the animation after the key has been hit
//adds sound when the buttons are clicked
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => {
    key.addEventListener('click', playSound);
    key.addEventListener('transitioned', removeTransition);
});

window.addEventListener('keydown', playSound);


















//not working? for click sound
// keys.forEach(key => {
//     key.addEventListener('click', () => {
//         audio.play();
//     })
// })





