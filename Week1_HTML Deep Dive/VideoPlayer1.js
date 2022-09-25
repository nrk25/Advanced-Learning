var videoPlayer = document.getElementById("video");
var playStatus = document.getElementById("play");

videoPlayer.addEventListener("ended", videoStatus, false);

function videoStatus (e) {
    playStatus.innerHTML = "Play";
}

function playVideo(status) {
    if(videoPlayer.paused) {
        videoPlayer.play();
        playStatus.innerHTML = "Pause";
    } else {
        videoPlayer.pause();
        playStatus.innerHTML = "Play";
    }
}

function stopVideo() {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    playStatus.innerHTML = "Play";
}