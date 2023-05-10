//Code to created scripted event for Introduction.html

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

var vid1 = document.getElementById("video1");
vid1.onclick = function() {
    playDirectedTrack(vid1, 0.1, -0.5);
    vid1.volume = 0.1;
    vid1.autoplay = true;
    vid1.load();
}

var vid2 = document.getElementById("video2");
vid2.onclick = function() {
    playDirectedTrack(vid1, 0.1, 0.5);
    vid2.volume = 0.1;
    vid2.autoplay = true;
    vid2.load();
}