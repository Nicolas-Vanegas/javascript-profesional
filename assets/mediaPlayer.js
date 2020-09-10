export default mediaPlayer;

//Le pasamos un objeto de configuración para que el código pueda ser reutilizable práctico. y en esta función constructora traemos todos los metodos que tiene media para el objeto que le pongamos de parámetro.
function mediaPlayer(config) {
  //este media sería el objeto de configuración que es el "el" con el valor $video
  this.media = config.el;
  //le añadado plugins, pero si no hay le pasa de valor inicial un array vacio para que pueda funcionar el código aún si no hay plugins
  this.plugins = config.plugins || [];

  //método para inicializar los plugins
  this._initPlugins();
}

//Método para poder adjuntar muchos plugins
mediaPlayer.prototype._initPlugins = function () {
  //Por cada uno de los plugins le asigna su método run para que se ejecute
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
};

mediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};
mediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};

mediaPlayer.prototype.play = function () {
  this.media.play();
};

mediaPlayer.prototype.pause = function () {
  this.media.pause();
};

mediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    //Acá puedo usar estos métodos de play y pause porque al ser creados como un prototipo de mediaPlayer quedan almacenados en el objeto padre del propio mediaPlayer
    this.play();
  } else {
    this.pause();
  }
};

mediaPlayer.prototype.mutting = function () {
  if (this.media.muted) {
    this.unmute();
  } else {
    this.mute();
  }
};
