var key = {
  "left":false, "up":false, "right":false, "down":false
};
var selection = 0;
var lastRender = 0;
function detectKey({"keyCode":keye}) {
  console.log(keye);
  switch(keye) {
    case 37:
      key.left = true;
      break;
    case 38:
      key.up = true;
      break;
    case 39:
      key.right = true;
      break;
    case 40:
      key.down = true;
      break;
    default:
  }
}
function releaseKey({"keyCode":keye}) {
  console.log(keye);
  switch(keye) {
    case 37:
      key.left = false;
      break;
    case 38:
      key.up = false;
      break;
    case 39:
      key.right = false;
      break;
    case 40:
      key.down = false;
      break;
    default:
  }
}
function update(delta) {
  if (key.up) {
    selection--;
    if (selection==-1) selection=2;
    console.log('selUp');
  }
  if (key.down) {
    selection++;
    if (selection==3) selection=0;
    console.log('selDown');
  }
  /*if (key.left) {
    
  }
  if (key.right) {
    
  }*/
  key = {
    "left":false, "up":false, "right":false, "down":false
  };
  
}
function draw() {
  document.getElementById('choice').style.setProperty('--choice-option', `${17-(selection*7)}.5vh`);
}
function loop(timestamp) {
  var progress = timestamp - lastRender;

  update(progress / (100/6));
  draw();

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);