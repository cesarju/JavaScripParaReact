import "https://vjs.zencdn.net/7.10.2/video.min.js";
console.log("He importado el video.js");
ps5.classList.remove("hidden");

const player = videojs("ps5", {
  controls: true,
  preload: "auto",
});

export { player };
