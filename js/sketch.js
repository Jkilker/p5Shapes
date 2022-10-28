//setup function runs once at the start
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}
//draw function is a continous loop, runs from the start, at 60fps
function draw() {
    background(220); //light grey background

    fill(255, 255, 255); //setting fill to rgb value for white
    ellipse(400, 400, 200); //circle beinng drawn on our canvas
    
    fill(51)
    square(300,300,100)
    
}