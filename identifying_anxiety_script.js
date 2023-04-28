/* Setting all variables for onclick listeners and timed functions*/
var GAD = document.getElementById("GAD");
var GADimage = document.getElementById("GADimage");
var GADvideo = document.getElementById("GADvideo");
var PDA = document.getElementById("PDA");
var PDAimage = document.getElementById("PDAimage");
var PDAvideo = document.getElementById("PDAvideo");
var SAD = document.getElementById("SAD");
var SADimage = document.getElementById("SADimage");
var SADvideo = document.getElementById("SADvideo");
var OCD = document.getElementById("OCD");
var OCDimage = document.getElementById("OCDimage");
var OCDvideo = document.getElementById("OCDvideo");
var Phobias = document.getElementById("Phobias");
var Phobiasimage = document.getElementById("Phobiasimage");
var Phobiasvideo = document.getElementById("Phobiasvideo");

/* Onclick events for each section of webpage*/
GAD.onclick = function() {
    GADimage.className += " hidden";
    GADvideo.className = "ongoing";
    GADvideo.volume = 0.1;
    GADvideo.autoplay = true;
    GADvideo.load();
}
GADvideo.onended = function() {
    GADvideo.className = "hidden";
    GADimage.classList.remove("hidden");
}
PDA.onclick = function() {
    PDAimage.className += " hidden";
    PDAvideo.className = "ongoing";
    PDAvideo.volume = 0.1;
    PDAvideo.autoplay = true;
    PDAvideo.load();
}
PDAvideo.onended = function() {
    PDAvideo.className = "hidden";
    PDAimage.classList.remove("hidden");
}
SAD.onclick = function() {
    SADimage.className += " hidden";
    SADvideo.className = "ongoing";
    SADvideo.volume = 0.1;
    SADvideo.autoplay = true;
    SADvideo.load();
}
SADvideo.onended = function() {
    SADvideo.className = "hidden";
    SADimage.classList.remove("hidden");
}
OCD.onclick = function() {
    OCDimage.className += " hidden";
    OCDvideo.className = "ongoing";
    OCDvideo.volume = 0.1;
    OCDvideo.autoplay = true;
    OCDvideo.load();
}
OCDvideo.onended = function() {
    OCDvideo.className = "hidden";
    OCDimage.classList.remove("hidden");
}
Phobias.onclick = function() {
    Phobiasimage.className += " hidden";
    Phobiasvideo.className = "ongoing";
    Phobiasvideo.volume = 0.1;
    Phobiasvideo.autoplay = true;
    Phobiasvideo.load();
}
Phobiasvideo.onended = function() {
    Phobiasvideo.className = "hidden";
    Phobiasimage.classList.remove("hidden");
}
