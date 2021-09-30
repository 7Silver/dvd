var x = 50
var y = 50
var sizex= 200
var sizey = 100
var xspeed = 9
var yspeed = 11
csizex = 1440
csizey = 795
let img;
function setup() {
  createCanvas(csizex, csizey);
  frameRate(60)
  
}
function draw() {
  background(0);
  image(img, x, y,sizex,sizey)
  fill(255)
  x=x+xspeed
  y=y+yspeed
  if(x>=csizex-sizex){xspeed=-random(7,13)}
  if(x<=0){xspeed=random(7,13)}
  if(y>=csizey-sizey){yspeed=-random(7,13)}
  if(y<=0){yspeed=random(7,13)}
}
function preload() {
  img = loadImage('assets/dvd.png');
}
