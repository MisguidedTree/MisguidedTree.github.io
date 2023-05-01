//Code to created scripted event for Introduction.html

// Experimenting with directional sound
// Currently attempting to use WebAudioAPI with stereo output
// Confirmed working in Igloo but does not wrap from far-left to 
// far-right, or in reverse

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

// Begin stage 1 on play button clicked
var start_introduction = document.getElementById("start");
start_introduction.onclick = function() {
    start_introduction.className = ("hidden");
    var stage1 = document.getElementById("stage1");
    stage1.className = ("screen panel35");
    var intro_audio_1 = document.getElementById("intro_audio_1");
    playDirectedTrack(intro_audio_1, 0.1, 0);
    intro_audio_1.autoplay = true;
    intro_audio_1.load();
}

//Move from stage 1 to stage 2
var intro_audio_1 = document.getElementById("intro_audio_1");
intro_audio_1.onended = function () {
    var stage2 = document.getElementById("stage2");
    stage2.className = ("screen panel25");
    var stage2video = document.getElementById("stage2video");
    playDirectedTrack(stage2video, 0.1, -0.6);
    stage2video.autoplay = true;
    stage2video.load();
}

//Move from stage 2 to stage 3
var stage2video = document.getElementById("stage2video");
stage2video.onended = function() {
    var stage3 = document.getElementById("stage3");
    stage3.className = ("screen panel15");
    var intro_audio_2 = document.getElementById("intro_audio_2");
    playDirectedTrack(intro_audio_2, 0.1, -1);
    intro_audio_2.autoplay = true;
    intro_audio_2.load();
}

//Move from stage 3 to stage 4
var intro_audio_2 = document.getElementById("intro_audio_2");
intro_audio_2.onended = function() {
    var stage4 = document.getElementById("stage4");
    stage4.className = ("screen panel45");
    var stage4video = document.getElementById("stage4video");
    playDirectedTrack(stage4video, 0.1, 0.6);
    stage4video.autoplay = true;
    stage4video.load();
}

//Move from stage 4 to stage 5
var stage4video = document.getElementById("stage4video");
stage4video.onended = function() {
    var stage5 = document.getElementById("stage5");
    stage5.className = ("screen panel55");
    var intro_audio_3 = document.getElementById("intro_audio_3");
    playDirectedTrack(intro_audio_3, 0.1, 1);
    intro_audio_3.autoplay = true;
    intro_audio_3.load();
}

// Move from stage 5 to stage 6
var intro_audio_3 = document.getElementById("intro_audio_3");
intro_audio_3.onended = function() {
    var stage1 = document.getElementById("stage1");
    stage1.className += (" hidden");
    var stage6 = document.getElementById("stage6");
    stage6.className = ("screen panel35");
}