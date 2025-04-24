window.addEventListener('DOMContentLoaded', function () {
  var script = document.createElement('script');
  script.src = 'https://funnygames.lol/ad.js';
  script.async = true;

  var container = document.getElementById('ad1-container');
  if (container) {
    container.appendChild(script);
  }
});
