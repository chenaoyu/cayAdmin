export function launchFullscreen(element) {
    // 全屏
 if(element.requestFullscreen) {
  element.requestFullscreen();
 } else if(element.mozRequestFullScreen) {
  element.mozRequestFullScreen();
 } else if(element.webkitRequestFullscreen) {
  element.webkitRequestFullscreen();
 } else if(element.msRequestFullscreen) {
  element.msRequestFullscreen();
 }
}