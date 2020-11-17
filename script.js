
let audio = document.getElementById("song");
audio.volume = 0.06;
audio.style.overflow = 0;

function play(){
    audio.play();
}

function stop(){
    audio.pause();
    let pause = audio.currentTime;
    pause = audio.play;  
}

function forward(){
    audio.currentTime += 10;
}

function backward(){
    audio.currentTime -= 10;
}


    
