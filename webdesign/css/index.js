/**
 * Created by JPMC-PC11 on 29/05/2017.
 //
var playButton = document.getElementById("playButton");
var audio = document.getElementById("audio1");


playButton.onclick = function () {
    audio.play();

}
var pauseButton = document.getElementById("pauseButton");
var audio = document.getElementById("audio");


pauseButton.onclick = function () {
    audio.pause();
}


var stopButton = document.getElementById("stopButton");
var audio = document.getElementById("audio1");

stopButton.onclick = function () {
    audio.load();
}

var playPause = document.getElementById("playPause");
var video = document.getElementById("video1");

playPause.onclick = function () {
    if(video.paused){
        video.play();
        playPause.innerHTML="pause";
    }else{
        video.pause();
    }

}


var stopButton2 = document.getElementById("stopButton2");
var video = document.getElementById("video1");

stopButton2.onclick = function () {
    video.load();
    playPause.innerHTML="play";

}

 */
/**
var playButton =$("#playButton");
var $sounds = $("#audio1");


playButton.click(function () {
    var audioOut = $sounds.get(0);
    if(audioOut.paused){
        audioOut.play();
        playButton.text("Pause");

    }else {
        audioOut.pause();
        playButton.text("Play");
    }
});

var stopButton =$("#stopButton");
var $sounds2 = $("#audio1");

stopButton.click(function () {
    var audioOut = $sounds2.get(0);
    audioOut.load();
});


/** video section



var videoButton =$("#playPause");
var $video = $("#video1");

videoButton.click(function () {
    var videoOut = $video.get(0);
    if(videoOut.paused){
        videoOut.play();
        videoButton.text("Pause");
    }else{
        videoOut.pause();
        videoButton.text("Play");
    }


});
var stpButton = $("#stopButton2");
var $videos = $("#video1");

stpButton.click(function () {
    var videoStop = $videos.get(0);
    videoStop.load();
});



*/

function loadDoc () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && xhttp.status == 200){
            document.getElementById("click-me").innerHTML=xhttp.responseText;

        }
    };
    xhttp.open("GET","webdesign/css/ajax_info.txt",true);
    xhttp.send();

}













