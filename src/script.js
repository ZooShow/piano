function sound(path){
    var audio = new Audio();
    audio.src = path;
    audio.autoplay = true;
}

var buttonsWhite = document.querySelectorAll('div');

console.log(buttonsWhite);

for (let button of buttonsWhite){
    button.onclick = function(){
        if (button.classList.contains('1')){
            sound('src/audio/1.mp3');
        }
        if (button.classList.contains('2')){
            sound('src/audio/2.mp3');
        }
        if (button.classList.contains('3')){
            sound('src/audio/3.mp3');
        }
        if (button.classList.contains('4')){
            sound('src/audio/4.mp3');
        }
        if (button.classList.contains('5')){
            sound('src/audio/5.mp3');
        }
        if (button.classList.contains('6')){
            sound('src/audio/6.mp3');
        }
        if (button.classList.contains('7')){
            sound('src/audio/7.mp3');
        }
        if (button.classList.contains('8')){
            sound('src/audio/8.mp3');
        }
        if (button.classList.contains('9')){
            sound('src/audio/9.mp3');
        }
        if (button.classList.contains('10')){
            sound('src/audio/10.mp3');
        }
    }
}



