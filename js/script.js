function handleVideo(videoSrc) {
  const videoDiv = videoSrc;
  const video = videoSrc.get(0);

  if (video.paused) {
    video.play();
    videoDiv.closest(".about-video-wrapper").removeClass("border-active");
    videoDiv.closest(".about-video").find(".btn-play").hide();
  } else {
    video.pause();
    videoDiv.closest(".about-video").find(".btn-play").show();
  }
}

function handlePlayPause(videoSrc) {
  const video = videoSrc.get(0);

  if (!video.paused) {
    videoSrc.closest(".about-video-wrapper").removeClass("border-active");
    videoSrc.closest(".about-video").find(".btn-play").hide();
  } else {
    videoSrc.closest(".about-video").find(".btn-play").show();
  }
}

$(document).ready(function () {
  $(".about-video").on("click", function (e) {
    e.preventDefault();
    handleVideo($(this).find("video"));
  });

  $(".about-video-wrapper video").on("play pause", function () {
    handlePlayPause($(this));
  });

  $(".license-category-switcher a").on("click", function (e) {
    e.preventDefault();

    const dataTab = $(this).attr("data-tab");

    $(".license-category-switcher a").removeClass("active");
    $(this).addClass("active");

    $(".license-all").removeClass("active");
    $(".license-all." + dataTab).addClass("active");
  });
});
