const Star = [[10, 20]];
const Triangle = [[70, 22]];

const nav = d3.select(".navbar");

const svg = nav.append("svg").attr("width", "1000").attr("height", "500");

var shapesGroup = svg.append("g").attr("transform", "translate(20,10)");
// Appending Paths to Symbol
shapesGroup.append("path").attr("class", "starPath");
shapesGroup.append("path").attr("class", "trianglePath");

const yellowCircle = shapesGroup
  .append("circle")
  .attr("cx", "130")
  .attr("cy", "20")
  .attr("r", "10")
  .attr("fill", "yellow")
  .attr("stroke", "black")
  .attr("id", "yellowCircle");
const blueCircle = shapesGroup
  .append("circle")
  .attr("cx", "180")
  .attr("cy", "20")
  .attr("r", "10")
  .attr("fill", "blue")
  .attr("stroke", "black")
  .attr("id", "blueCircle");

const greenCircle = shapesGroup
  .append("circle")
  .attr("cx", "230")
  .attr("cy", "20")
  .attr("r", "10")
  .attr("fill", "green")
  .attr("stroke", "black")
  .attr("id", "greenCircle");

const yellowRect = shapesGroup
  .append("rect")
  .attr("width", "20")
  .attr("height", "20")
  .attr("x", "280")
  .attr("y", "10")
  .attr("fill", "yellow")
  .attr("id", "yellowRect");
// .attr("stroke", "black");
const blueRect = shapesGroup
  .append("rect")
  .attr("width", "20")
  .attr("height", "20")
  .attr("x", "330")
  .attr("y", "10")
  .attr("fill", "blue")
  .attr("id", "blueRect");
// .attr("stroke", "black");
const purpuleRhombus = shapesGroup
  .append("rect")
  .attr("width", "20")
  .attr("height", "20")
  .attr("x", "380")
  .attr("y", "10")
  .attr("fill", "purple")
  .attr("stroke", "black")
  .attr("id", "purpuleRhombus");
const whiteRhombus = shapesGroup
  .append("rect")
  .attr("width", "20")
  .attr("height", "20")
  .attr("x", "430")
  .attr("y", "10")
  .attr("fill", "white")
  .attr("stroke", "black")
  .attr("id", "whiteRhombus")
  .attr("transform", "rotate(90deg)"); // it doesn't work
shapesGroup
  .append("line")
  .attr("x1", "0")
  .attr("y1", "0")
  .attr("x2", "1000")
  .attr("y2", "0")
  .attr("stroke", "black");
shapesGroup
  .append("line")
  .attr("x1", "0")
  .attr("y1", "40")
  .attr("x2", "1000")
  .attr("y2", "40")
  .attr("stroke", "black");
// how to import the second data

YC = document.getElementById("yellowCircle");
BC = document.getElementById("blueCircle");
GC = document.getElementById("greenCircle");
YRC = document.getElementById("yellowRect");
BRC = document.getElementById("blueRect");
PR = document.getElementById("purpuleRhombus");
WR = document.getElementById("whiteRhombus");
RT = document.getElementById("trianglePath");
WS = document.getElementById("starPath");

//Set a Function to draw

let position_x = 10;
let position_yc = 100;
let position_y = 90;

function drawYellowCircle() {
  shapesGroup
    .append("circle")
    .attr("cx", position_x)
    .attr("cy", position_yc)
    .attr("r", "10")
    .attr("fill", "yellow")
    .attr("stroke", "black");
  position_x += 50;
  if (position_x > 950) {
    position_x = 10;
    position_y += 50;
    position_yc += 50;
  }
}
function drawBlueCircle() {
  shapesGroup
    .append("circle")
    .attr("cx", position_x)
    .attr("cy", position_yc)
    .attr("r", "10")
    .attr("fill", "blue")
    .attr("stroke", "black");
  // .attr("id", "blueCircle");
  position_x += 50;
  if (position_x > 950) {
    position_x = 10;
    position_y += 50;
    position_yc += 50;
  }
}
function drawGreenCircle() {
  shapesGroup
    .append("circle")
    .attr("cx", position_x)
    .attr("cy", position_yc)
    .attr("r", "10")
    .attr("fill", "green")
    .attr("stroke", "black");
  // .attr("id", "blueCircle");
  position_x += 50;
  if (position_x > 950) {
    position_x = 10;
    position_y += 50;
    position_yc += 50;
  }
}
function drawYellowRect() {
  shapesGroup
    .append("rect")
    .attr("width", "20")
    .attr("height", "20")
    .attr("x", position_x)
    .attr("y", position_y)
    .attr("fill", "yellow");
  // .attr("id", "yellowRect");
  // .attr("id", "blueCircle");
  position_x += 50;
  if (position_x > 950) {
    position_x = 10;
    position_y += 50;
    position_yc += 50;
  }
}
function drawBlueRect() {
  shapesGroup
    .append("rect")
    .attr("width", "20")
    .attr("height", "20")
    .attr("x", position_x)
    .attr("y", position_y)
    .attr("fill", "Blue");
  // .attr("id", "yellowRect");
  // .attr("id", "blueCircle");
  position_x += 50;
  if (position_x > 950) {
    position_x = 10;
    position_y += 50;
    position_yc += 50;
  }
}
function draw() {
  shapesGroup
    .append("circle")
    .attr("cx", "180")
    .attr("cy", "20")
    .attr("r", "10")
    .attr("fill", "blue")
    .attr("stroke", "black");
  // .attr("id", "blueCircle");
  position_x += 50;
  if (position_x > 950) {
    position_x = 10;
    position_y += 50;
    position_yc += 50;
  }
}
function draw() {
  shapesGroup
    .append("circle")
    .attr("cx", "180")
    .attr("cy", "20")
    .attr("r", "10")
    .attr("fill", "blue")
    .attr("stroke", "black");
  // .attr("id", "blueCircle");
  position_x += 50;
  if (position_x > 950) {
    position_x = 10;
    position_y += 50;
    position_yc += 50;
  }
}

YC.addEventListener("click", drawYellowCircle);
BC.addEventListener("click", drawBlueCircle);
GC.addEventListener("click", drawGreenCircle);
YRC.addEventListener("click", drawYellowRect);
BRC.addEventListener("click", drawBlueRect);
PR.addEventListener("click", draw);
WR.addEventListener("click", draw);
// RT.addEventListener("click", draw);
// WS.addEventListener("click", draw);
var starGenerator = d3.symbol().type(d3.symbolStar).size(150);
var triangleGenerator = d3.symbol().type(d3.symbolTriangle).size(250);

// Drawing a Star with weird way

d3.select("g")
  .select(".starPath")
  .data(Star)
  .attr("transform", function (d) {
    return "translate(" + d + ")";
  })
  .attr("d", starGenerator)
  .attr("fill", "white")
  .attr("stroke", "black")
  .attr("id", "starPath");
// Drawing a triangle with weird way

d3.select("g")
  .select(".trianglePath")
  .data(Triangle)
  .attr("transform", function (d) {
    return "translate(" + d + ")";
  })
  .attr("d", triangleGenerator)
  .attr("fill", "red")
  .attr("stroke", "black")
  .attr("id", "trianglePath");
