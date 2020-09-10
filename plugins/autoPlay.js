export default autoPlay;

function autoPlay() {}
autoPlay.prototype.run = function (player) {
  //Para que el video pueda hacer autoplay el video tiene que estar silenciado
  player.mute();
  player.play();
};
