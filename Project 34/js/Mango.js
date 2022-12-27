class Mango {
 constructor(x,y,width,height){
    this.x = x;
    this.y= y;
    this.width = width;
    this.height = height;
    this.image = mangoImg;
 }
display(){
    push();
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width+20,this.height+20);
    pop();
}
}