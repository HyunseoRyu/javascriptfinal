//snow image
var snow=[];
var img;

//for image
function preload(){
  img = loadImage("snow.png")
  
}

//drawing snowman and snow
function setup() {
  createCanvas(300, 800);
  
  for(i=0;i<15;i++){
    snow[i] = new 
    SnowFall (random(0, 300), random(0, 100));
  }
}

function draw() {
  background(0);
  
  //for circle
  var ellipseX = width/2;
  var ellipseY = height/2;
  var ellipseSize = 200;
  //for square
  var rectX = width/2;
  var rectY = height/2;
  var rectSize = 50;

  //stroke() paints the outline of a shape a specified color
  stroke(255, 255, 0);
  //strokeWeight specifies the thickness of on outline
  strokeWeight(2);
  
  //fill() paints the interior of shapes a specified color
  //the big circle color
  fill(255);
  //the big circle size
  ellipse(ellipseX, ellipseY, ellipseSize);
  
  //the small circle color
  fill(255);
  //the small circle size
  ellipse(ellipseX, ellipseY - 150, ellipseSize/2);
  
  //button color
  fill(0, 255, 0);
  //above button
  ellipse(ellipseX, ellipseY - 10, ellipseSize/9);
  //bottom button
  ellipse(ellipseX, ellipseY + 45, ellipseSize/9);
  
  //scarf rect color
  fill(255, 0, 0);
  //scarf size
  rect(rectX - 25, rectY - 110, 50, 20);
  
  noStroke();
  //land
  fill(255);
  //land location & size
  rect(rectX - 150, rectY + 100, 300, 200);
  
  //snow nostroke
  noStroke();
  //snow color
  fill(255);
  //snow
  ellipse(ellipseX, ellipseY - 250, ellipseSize/30);
  ellipse(ellipseX + 25, ellipseY - 250, ellipseSize/40); 
  ellipse(ellipseX - 25, ellipseY - 260, ellipseSize/50);
  ellipse(ellipseX + 50, ellipseY - 240, ellipseSize/50);
  ellipse(ellipseX - 50, ellipseY - 240, ellipseSize/40);  
  ellipse(ellipseX - 25, ellipseY - 240, ellipseSize/30);
  ellipse(ellipseX - 10, ellipseY - 235, ellipseSize/20);
  ellipse(ellipseX - 80, ellipseY - 235, ellipseSize/20);
  ellipse(ellipseX - 90, ellipseY - 200, ellipseSize/30);
  ellipse(ellipseX + 90, ellipseY - 190, ellipseSize/40);
  ellipse(ellipseX + 15, ellipseY - 230, ellipseSize/50);
  ellipse(ellipseX + 12, ellipseY - 190, ellipseSize/50);
  ellipse(ellipseX + 12, ellipseY - 181, ellipseSize/50);
  
  for(a=0;a<snow.length;a++){
  snow[a].display();
    snow[a].move();
  }
}
  
//falling the snow
class SnowFall{
 constructor(tempX,tempY){
  this.x=tempX;
   this.y=tempY;
   this.speed=1;
 }
  display(){
  image(img,this.x,this.y,5,5)
    //ellipse(this.x,this.y,this.speed);
  }
  move(){
     this.y+=1;
    if(this.y>=100){
      this.y=random(0,75);  
    }
  }
}