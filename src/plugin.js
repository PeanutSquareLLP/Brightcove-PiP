import videojs from 'video.js';
import {version as VERSION} from '../package.json';

// Default options for the plugin.
const defaults = {};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

var initPiP = (player, options) => {
  console.log('PiP: starting');
  let p2 = document.createElement('video');
  p2.setAttribute('data-account-id',player.el().dataset.account);
  p2.setAttribute('data-player-id',player.el().dataset.player);
  p2.setAttribute('data-embed',player.el().dataset.embed);
  p2.setAttribute('id',"player2");
  p2.setAttribute('class',"video-js");
  bc(p2, {}, function(){
    let pip = this;
    pip.muted(true);
    player.el().parentNode.insertBefore(pip.el(), player.el());
    pip.height(options.pipHeight);
    pip.width(options.pipWidth);
    console.log("PiP: mini player loaded to DOM");

    if (typeof jQuery.ui != 'undefined') {
      $("#player2").draggable({ containment: ".vjs-pip", scroll: false});
      console.log("PiP: mini player draggable");

    }
    pip.catalog.getVideo(options.vid2, (err, vid)=>{
      pip.catalog.load(vid);
    })
    player.on('play', function(){
      pip.play();
    })
    player.on('pause', function(){
      pip.pause();
    })
  });
  player.catalog.getVideo(options.vid1, (err, vid)=>{
    player.catalog.load(vid);
  })

}
/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 *           A Video.js player object.
 *
 * @param    {Object} [options={}]
 *           A plain object containing options for the plugin.
 */
const onPlayerReady = (player, options) => {
  player.addClass('vjs-pip');
  player.height(options.mainHeight);
  player.width(options.mainWidth);
  initPiP(player, options);

};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function pip
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const pip = function(options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
registerPlugin('pip', pip);

// Include the version number.
pip.VERSION = VERSION;

export default pip;
