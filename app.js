const splash = document.getElementById("splash");

function splashScreenAnim() {
  splash.style.animation = "splashAnim 2s";
  setTimeout(() => {
    splash.remove();
  }, 2000);
}
splashScreenAnim();

//break//
const body = document.querySelector("body");
const pulsatingBackground = document.querySelector(".pulsating-background");
const discoBall = document.querySelector(".discoBall");
discoBall.style.animation = "discoBallAnim 50s linear forwards infinite";

if (pulsatingBackground) {
  let hue = 0;
  let pulse = 75;
  let direction = 1;

  function animateBackground() {
    pulse += direction * 0.5;
    if (pulse > 100) {
      direction = -1;
    } else if (pulse < 50) {
      direction = 1;
    }

    hue += 0.5;
    if (hue >= 360) hue = 0;

    pulsatingBackground.style.background = `
      radial-gradient(circle, 
        hsl(${hue}, 100%, ${pulse}%) 0%, 
        hsl(${(hue + 60) % 360}, 100%, ${pulse - 20}%) 50%, 
        hsl(${(hue + 120) % 360}, 100%, ${pulse - 40}%) 100%)
    `;

    requestAnimationFrame(animateBackground);
  }

  setTimeout(() => {
    body.style.background = "rgb(0, 0, 0,0)";
    animateBackground();
  }, 1600);
} else {
  console.error("Pulsating background element not found!");
}

//break//
