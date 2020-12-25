let audio;

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA") {
        audio = new Audio("WhiteKeys/A.mp3");
        audio.play().then();
    } else if (event.code === "KeyS") {
        audio = new Audio("WhiteKeys/S.mp3");
        audio.play().then();
    } else if (event.code === "KeyD") {
        audio = new Audio("WhiteKeys/D.mp3");
        audio.play().then();
    } else if (event.code === "KeyF") {
        audio = new Audio("WhiteKeys/F.mp3");
        audio.play().then();
    } else if (event.code === "KeyG") {
        audio = new Audio("WhiteKeys/G.mp3");
        audio.play().then();
    } else if (event.code === "KeyH") {
        audio = new Audio("WhiteKeys/H.mp3");
        audio.play().then();
    } else if (event.code === "KeyJ") {
        audio = new Audio("WhiteKeys/J.mp3");
        audio.play().then();
    } else if (event.code === "KeyW") {
        audio = new Audio("BlackKeys/W.mp3");
        audio.play().then();
    } else if (event.code === "KeyE") {
        audio = new Audio("BlackKeys/E.mp3");
        audio.play().then();
    } else if (event.code === "KeyT") {
        audio = new Audio("BlackKeys/T.mp3");
        audio.play().then();
    } else if (event.code === "KeyY") {
        audio = new Audio("BlackKeys/Y.mp3");
        audio.play().then();
    } else if (event.code === "KeyU") {
        audio = new Audio("BlackKeys/U.mp3");
        audio.play().then();
    } else {
        console.warn("Warning. There is no such a key");
    }
});