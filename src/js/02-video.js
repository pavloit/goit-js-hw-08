import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe, {
    id: "vimeo-player",
    width: 1280
});

const storedTime = localStorage.getItem('videoplayer-current-time')
let currentTime = !!storedTime ? storedTime : 0; 
player.setCurrentTime(currentTime)
player.on('timeupdate', throttle(storeTime, 1000))

function storeTime(event) {
    const time = event.seconds;
    localStorage.setItem('videoplayer-current-time', time);
}
