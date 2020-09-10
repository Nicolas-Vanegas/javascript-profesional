import mediaPlayer from "./mediaPlayer.js";
import AutoPlay from "../plugins/autoPlay.js";

const $video = document.querySelector(".movie");
const $button = document.querySelector("button");
const $mute = document.querySelector(".mute");
const player = new mediaPlayer({
  el: $video,
  plugins: [
    //new AutoPlay()
  ],
});
/* console.log(player); */
//Todos los elementos del DOM tienen un API, los videos tienen un método llamado play
$button.onclick = () => player.togglePlay();
$mute.onclick = () => player.mutting();
