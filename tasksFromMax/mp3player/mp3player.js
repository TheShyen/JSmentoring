'use strict';

/* Задача: реализовать функционал mp-3 плеера. */

const songs = [["Slipknot - People = Shit", 10],
               ["Slipknot - Metabolic", 5],
               ["SOAD - Lonely Day", 5]]; 
let mp3 = {
    normalValue: 60,
    play() {
        let num = 0;
        if (num == songs.length) {
            console.log("Конец");
        }
        console.log("Играет " + songs[num][0]);
        setTimeout(this.play, songs[num][1] * 1000);
        num++;
    },
    startPlay(){
        setTimeout(this.play, 0);
    },

    pausePlay() {
        setTimeout(() => {clearTimeout(this.play); console.log('Нажали на паузу');}, 4220);
    },

    volumeUp() {
        this.normalValue +=5;
        console.log("Громкость повышена на 5", "Сейчас:" + this.normalValue);
    },

    volumeDown() {
        this.normalValue -=5;
        console.log("Громкость понижена на 5", "Сейчас:" + this.normalValue);
    },

    repeatTrack() {
        
    }
};

mp3.startPlay();
mp3.pausePlay();
mp3.volumeUp();
mp3.volumeUp();
mp3.volumeDown();