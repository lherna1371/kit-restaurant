//animate element by setting opacity to zero and fading in to 600
function animateElement(element) {
  $(element).css('opacity', 0); // Set initial opacity to 0
  $(element).fadeTo(300, 0.6); // Fade in over 300 milliseconds and set opacity to .6
}

animateElement('.logo');
animateElement('.menu');
animateElement('.lochours');

