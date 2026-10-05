// Fade background to solid white as viewer scrolls down
window.addEventListener('scroll', () => {
  const whiteOverlay = document.getElementById('whiteOverlay');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // Calculates opacity based on scroll depth (0 = full image background, 1 = solid white)
  let opacity = scrollPosition / (windowHeight * 0.7);

  if (opacity > 1) opacity = 1;
  if (opacity < 0) opacity = 0;

  whiteOverlay.style.opacity = opacity;
});