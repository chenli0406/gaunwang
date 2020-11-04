var ua = navigator.userAgent;
var isMobile = ua.indexOf('iPad') > -1 || ua.indexOf('iPhone') > -1 || ua.indexOf('Android') > -1;
var timer = null;
window.isMobile = isMobile;

function samResize() {
  var clientWidth = window.innerWidth || document.body.clientWidth;
  var width = 0;
  if (!clientWidth) {
    clientWidth = 750;
  }
  if (clientWidth < 980) {
    width = 750;
    window.isMinScreen = true;
  } else {
    width = 1920;
  }
  document.documentElement.style.fontSize = 100 * (clientWidth / width) + 'px';
}

samResize();

window.addEventListener('resize', function() {
  clearTimeout(timer);
  timer = setTimeout(function(){
    samResize();
  }, 300);
});
