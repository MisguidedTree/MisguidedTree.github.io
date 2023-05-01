//Code to created scripted event for Anxiety Management.html

// Function to create directional sound
function playDirectedTrack(audiosource, volume, panlocation) {
    // Cross browser support
    const AudioContext = window.AudioContext;
    const audioCtx = new AudioContext();

    // load sound
    const audioElement = audiosource;
    const track = audioCtx.createMediaElementSource(audioElement);

    // Volume
    const gainNode = audioCtx.createGain();
    gainNode.gain = volume;

    // Pan / Direction
    const pannerOptions = {pan: panlocation};
    const panner = new StereoPannerNode(audioCtx, pannerOptions);

    // Connect source to desired output
    track.connect(gainNode).connect(panner).connect(audioCtx.destination);
}

// Declare variables for sound files
var start1 = document.getElementById("start1");
var start2 = document.getElementById("start2");
var start3 = document.getElementById("start3");
var med1 = document.getElementById("med1");
var med2 = document.getElementById("med2");
var med3 = document.getElementById("med3");

// Declar variable to change background while one soundfile is playing
var bground = document.getElementById("background");

// Create onclick functions to begin meditation and actons on meditation ended
start1.onclick = function() {
    playDirectedTrack(med1, 0.1, -0.4)
    med1.autoplay = true;
    med1.load();
    bground.style.backgroundColor = red;
}
med1.onended = function() {
    bground.style.backgroundColor = aqua;
}

start2.onclick = function() {
    playDirectedTrack(med2, 0.1, 0)
    med2.autoplay = true;
    med2.load();
    bground.style.backgroundColor = green;
}
med2.onended = function() {
    bground.style.backgroundColor = aqua;
}

start3.onclick = function() {
    playDirectedTrack(med3, 0.1, 0.6)
    med3.autoplay = true;
    med3.load();
    bground.style.backgroundColor = yellow;
}
med3.onended = function() {
    bground.style.backgroundColor = aqua;
}