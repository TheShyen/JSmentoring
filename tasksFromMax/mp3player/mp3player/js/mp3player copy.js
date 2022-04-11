'use strict';

/* Задача: реализовать функционал mp-3 плеера. */
let audio = document.getElementById("audio");    // Берём элемент audio
let time = document.querySelector(".time");      // Берём аудио дорожку
let btnPlay = document.querySelector(".play");   // Берём кнопку проигрывания
let btnPause = document.querySelector(".pause"); // Берём кнопку паузы
let btnPrev = document.querySelector(".prev");   // Берём кнопку переключения предыдущего трека
let btnNext = document.querySelector(".next");

let playlist = [
    'treck1.mp3',
    'treck2.mp3',
    'treck3.mp3',
];
 
let treck; // Переменная с индексом трека
 
// Событие перед загрузкой страницы

treck = 0; // Присваиваем переменной ноль

function switchTreck (numTreck) {
    // Меняем значение атрибута src
    audio.src = './audio/' + playlist[numTreck];
    // Назначаем время песни ноль
    audio.currentTime = 0;
    // Включаем песню
    audio.play();
}






/* const songs = [["Slipknot - People = Shit", 10],
               ["Slipknot - Metabolic", 5],
               ["SOAD - Lonely Day", 5]]; 
let mp3 = {
    normalValue: 60,
    currentTime: 0,
    switchTreck (numTreck) {
        // Назначаем время песни ноль
        this.currentTime = 0;
        // Включаем песню
        this.audioPlay();
    },

    audioPlay() {
        setInterval(function() {
        let audioTime = Math.round(this.currentTime);
        // Получаем всё время песни
        let audioLength = Math.round(songs[treck][1]);
        // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
        // И проверяем что переменная treck меньше четырёх
        if (audioTime == audioLength && treck < 3) {
            treck++; // То Увеличиваем переменную 
            this.switchTreck(treck); // Меняем трек
        // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
        } else if (audioTime == audioLength && treck >= 3) {
            treck = 0; // То присваиваем treck ноль
            this.switchTreck(treck); 
        }
        }, 10);
    },

    pausePlay() {
        setTimeout(() => {clearInterval(this.audioPlay()); console.log('Нажали на паузу');}, 4220);
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

mp3.audioPlay();
mp3.pausePlay();
mp3.volumeUp();
mp3.volumeUp();
mp3.volumeDown(); */