import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframeRef);
const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
// console.log(player);
player.on('timeupdate', throttle(onPlay, 1000));

function setTime() {
  const seconds = localStorage.getItem('videoplayer-current-time');
  if (seconds) {
    player.setCurrentTime(seconds);
  }
}
window.addEventListener('DOMContentLoaded', setTime);
