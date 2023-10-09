import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const STORAGE_KEY = 'videoplayer-current-time'
const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe, {
    id: "vimeo-player",
    width: 1280
});

const storedTime = localStorage.getItem(STORAGE_KEY) || 0
player.setCurrentTime(storedTime)
player.on('timeupdate', throttle(storeTime, 1000))

function storeTime(event) {
    const time = event.seconds;
    localStorage.setItem(STORAGE_KEY, time);
}
