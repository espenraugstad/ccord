/* GLOBAL VARIABLES */
// DOM-elements
const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");
const messages = document.getElementById("messages");

// Canvas parameters
const cWidth = cvs.width;
const cHeight = cvs.height;

// Range of coordinate axes
const range = {
  xMin: -10,
  xMax: 10,
  xTics: 10,
  yMin: -5,
  yMax: 10,
  yTics: 10,
};

/* RUN SEQUENCE */
// Clear canvas
clearCanvas();

// Draw the axes
drawAxes();

/* FUNCTIONS */

function drawAxes() {
  // Get origin
  [xOrigin, yOrigin] = calculateOrigin();

  // Draw coordinate axes
  ctx.strokeStyle = "white";

  // x - axis:
  ctx.beginPath();
  if (range.yMin > 0 || range.yMax < 0) {
    messages.innerText = "Warning: x-axis out of bounds!";
  }
  ctx.moveTo(0, yOrigin);
  ctx.lineTo(cWidth, yOrigin);
  ctx.stroke();

  // y-axis:
  ctx.beginPath();
  if (range.xMin > 0 || range.xMax < 0) {
    messages.innerText = "Warning: y-axis out of bounds!";
  }
  ctx.moveTo(xOrigin, 0);
  ctx.lineTo(xOrigin, cHeight);
  ctx.stroke();
}

function calculateOrigin() {
  // Find range of x-axis
  const xRange = range.xMax - range.xMin;

  // Pixels/unit - x-axis
  const xPixelsPerUnit = cWidth / xRange;
  console.log(xPixelsPerUnit);

  // Pixels to origin
  const xOrigin = (0 - range.xMin) * xPixelsPerUnit;

  // Find range of y-axis
  const yRange = range.yMax - range.yMin;

  // Pixels/unit - y-axis
  const yPixelsPerUnit = cHeight / yRange;

  // Pixels to origin
  const yOrigin = range.yMax * yPixelsPerUnit;

  return [xOrigin, yOrigin];
}

function clearCanvas() {
  ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cWidth, cHeight);
}
