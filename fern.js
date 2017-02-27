function setup() {
 createCanvas(800, 800)
}

var points = [1, 1]

var firstMatrix = math.matrix([
 [0, 0],
 [0, 0.16]
])
var secondMatrix = math.matrix([
 [0.85, 0.04],
 [-0.04, 0.85]
])
var thirdMatrix = math.matrix([
 [.20, -.26],
 [0.23, 0.22]
])
var fourthMatrix = math.matrix([
 [-0.15, 0.28],
 [0.26, 0.24]
])

var firstBias = [0, 0]
var secondBias = [0, 1.6]
var thirdBias = [0, 1.6]
var fourthBias = [0, 0.44]

function step(variation) {
 switch (variation) {
  case 0:
   points = math.multiply(firstMatrix, points)
   points = math.add(points, firstBias)
   break;
  case 1:
   points = math.multiply(secondMatrix, points)
   points = math.add(points, secondBias)
   break;
  case 2:
   points = math.multiply(thirdMatrix, points)
   points = math.add(points, thirdBias)
   break;
  case 3:
   points = math.multiply(fourthMatrix, points)
   points = math.add(points, fourthBias)
   break;
 }
}


var p = 0;
var j = 0;
setInterval(function() {
 p += .05
 j = cos(p) * 100
}, 1)

function draw() {
 background(23)
 stroke(255)
 strokeWeight(3)
 translate(width / 2, height - 120)

 for (var i = 0; i < 1000; i++) {
  var val = Math.random();
  var randomNumber = 0;
  if (val < 0.01) { randomNumber = 0 } else
  if (val < 0.86) { randomNumber = 1 } else
  if (val < 0.93) { randomNumber = 2 } else
  if (val < 1.00) { randomNumber = 3 } else
   console.log(randomNumber, points._data[0], points._data[1])
  step(randomNumber)
  console.log(randomNumber, points._data[0], points._data[1])
  stroke(78, 169, 17)
  point(points._data[0] * j, points._data[1] * -50)


 }
}
