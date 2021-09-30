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
  x=x+xspeed
  y=y+yspeed
  if(x>=csizex-sizex){
    xspeed=-random(7,13)
    tint(random(80,255),random(80,255),random(80,255))
  }
  if(x<=0){
    xspeed=random(7,13)
    tint(random(80,255),random(80,255),random(80,255))
  }
  if(y>=csizey-sizey){
    yspeed=-random(7,13)
    tint(random(80,255),random(80,255),random(80,255))
  }
  if(y<=0){
    yspeed=random(7,13)
    tint(random(80,255),random(80,255),random(80,255))
  }
}
function preload() {
  img = loadImage('assets/dvd.png');
}