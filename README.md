# videojs-pip

pip plugin

## Table of Contents

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
git clone https://github.com/RevinKey/Brightcove-PiP.git

npm install
npm start

```


## TODO

1. Better UX for hiding/showing the PIP
2. See if we can move away from using Document to create elements, just use VideoJS framework to create components.
3. Test what happens with Live streams/DVRUX plugin
4. Issue with swapping twice if videojs remote sources
5. QA/ Test on different Browsers.

## Contributing
1. Branch master
2. Make changes
3. Create PR for review
4. Someone will review for approval and merging

## Usage

To include videojs-pip on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-pip.min.js"></script>
<script>
  var player = videojs('my-video');
  var options = {};
  options.vid1 = "https://secure.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=5263703258001&pubId=5092057275001&secure=true";
  options.vid2 = "http://solutions.brightcove.com/bcls/assets/videos/Sea_Anemone.mp4";
  options.mainHeight = "550px";
  options.mainWidth = "900px";
  options.pipHeight = "200px";
  options.pipWidth = "400px";
  options.bc = false;
  player.pip(options);
  player.pip();
</script>
```


## License

MIT. Copyright (c) Kevin Reynolds


[videojs]: http://videojs.com/
