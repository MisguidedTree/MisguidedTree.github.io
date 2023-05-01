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
var guidedbground = document.getElementById("medback");
var bodybground = document.getElementById("bodyback");
var breathbground = document.getElementById("breathback");
var medvid = document.getElementById("medvid");
var bodyvid = document.getElementById("bodyvid");
var breathvid = document.getElementById("breathvid");


// Create onclick functions to begin meditation and actons on meditation ended
start1.onclick = function() {
    bground.className = "hidden";
    bodybground.className = "container";
    bodyvid.loop = true;
    bodyvid.volume = 0;
    bodyvid.autoplay = true;
    bodyvid.load();
    playDirectedTrack(med1, 0.1, -0.4)
    med1.autoplay = true;
    med1.load();
}
med1.onended = function() {
    bodybground.className = "hidden";
    bground.className = "container";
    bodyvid.pause();
}

start2.onclick = function() {
    bground.className = "hidden";
    breathbground.className = "container";
    breathvid.loop = true;
    breathvid.volume = 0;
    breathvid.autoplay = true;
    breathvid.load();
    playDirectedTrack(med2, 0.1, 0)
    med2.autoplay = true;
    med2.load();
}
med2.onended = function() {
    breathbground.className = "hidden";
    bground.className = "container";
    breathvid.pause();
}

start3.onclick = function() {
    bground.className = "hidden";
    guidedbground.className = "container";
    medvid.loop = true;
    medvid.volume = 0;
    medvid.autoplay = true;
    medvid.load();
    playDirectedTrack(med3, 0.1, 0.6)
    med3.autoplay = true;
    med3.load();
}
med3.onended = function() {
    guidedbground.className = "hidden";
    bground.className = "container";
    medvid.pause();
}