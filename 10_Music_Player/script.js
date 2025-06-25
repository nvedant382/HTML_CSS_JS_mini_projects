let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrlIcon = document.getElementById("ctrlIcon")

let forward = document.getElementById("forward")
let backward = document.getElementById("backward")
let repeat = document.getElementById("repeat")
let repeatMode = "none";

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    } else {
        song.play();
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime
    }, 1000)
}

progress.onchange = function () {
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.remove("fa-play")
    ctrlIcon.classList.add("fa-pause")
}

forward.onclick = function () {
    song.currentTime += 5
}

backward.onclick = function () {
    song.currentTime -= 5
    if (song.currentTime < 0) {
        song.currentTime = 0;
    }
}

repeat.onclick = function () {
    if (repeatMode === "none") {
        repeatMode = "all";
        repeat.style.color = "green";
    } else if (repeatMode === "all") {
        repeatMode = "one";
        repeat.classList.add("fa-1");
        repeat.style.color = "blue";
    } else {
        repeatMode = "none"
        repeat.classList.remove("fa-1")
        repeat.style.color = "#f53131"
    }
}

song.addEventListener("ended", function () {
    if (repeatMode === "all") {
        song.currentTime = 0;
        song.play();
    } else if (repeatMode === "one") {
        song.currentTime = 0;
        song.play();
        repeatMode = "none"
    } else {
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
})