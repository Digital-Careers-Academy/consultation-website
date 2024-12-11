const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 7000, // Increase the delay between slides (7 seconds)
    disableOnInteraction: false, // Continue autoplay even after user interaction
  },
  speed: 1500, // Increase the transition speed to make it smoother (1.5 seconds)
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function toggleVideo() {
  const video = document.getElementById("promoVideo");
  const playButton = document.querySelector(".play-button");

  if (video.paused) {
    video.play();
    playButton.style.display = "none"; // Hide play button when video is playing
  } else {
    video.pause();
    playButton.style.display = "flex"; // Show play button when video is paused
  }
}

document.getElementById("promoVideo").addEventListener("click", toggleVideo);
