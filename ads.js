// ads.js

atOptions = {
  'key' : '0dfb40ed676f77d4e4e7051bee1682e2',
  'format' : 'iframe',
  'height' : 90,
  'width' : 728,
  'params' : {}
};

var adContainer = document.getElementById('ad-container');
if (adContainer) {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://stemboastfulrattle.com/0dfb40ed676f77d4e4e7051bee1682e2/invoke.js';
  iframe.width = '728';
  iframe.height = '90';
  adContainer.appendChild(iframe);
}
