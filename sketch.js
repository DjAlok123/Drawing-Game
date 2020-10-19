function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10);
  
  // You Can Change The Color Of The Line
  stroke("green");
}




function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

