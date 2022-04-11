'use strict';

/* Задача: реализовать функционал mp-3 плеера. */
let audio = document.getElementById("audio");
let buttonPlay = document.querySelector(".play");
let buttonPause = document.querySelector(".pause");
let buttonPrev = document.querySelector(".prev"); 
let buttonNext = document.querySelector(".next");
let buttonVolumeUp = document.querySelector(".volumeUp");
let buttonVolumeDown = document.querySelector(".volumeDown");

let playlist = [
    'SOAD - Lonely Day.mp3',
    'Slipknot - People=Shit.mp3',
    'Slipknot - Metabolic.mp3',
];
 
let track = 0;
let audioPlay;

function switchTrack (numTrack) {
    audio.src = 'src/audio/' + playlist[numTrack];
    audio.currentTime = 0;
    audio.play();
}

buttonPlay.addEventListener("click", function() {
    audio.play();
    audioPlay = setInterval(function() {
        let audioTime = Math.round(audio.currentTime);
        let audioLength = Math.round(audio.duration);
        if (audioTime == audioLength && track < playlist.length -1) {
            track++;
            switchTrack(track);
        } else if (audioTime == audioLength && track >= playlist.length -1) {
            track = 0;
            switchTrack(track);
        }
    }, 10000);
});

buttonPause.addEventListener("click", function() {
    audio.pause();
    clearInterval(audioPlay);
});

buttonPrev.addEventListener("click", function() {
    if (track > 0) {
        track--;
        switchTrack(track); 
    } else {
        track = 3;
        switchTrack(track);
    }
});


buttonNext.addEventListener("click", function() {
    if (track < playlist.length -1) {
        track++;
        switchTrack(track);
    } else { 
        track = 0;
        switchTrack(track);
    }
});

buttonVolumeUp.addEventListener("click", function() {
    audio.volume += 0.1;
});

buttonVolumeDown.addEventListener("click", function() {
    audio.volume -= 0.1;
});
