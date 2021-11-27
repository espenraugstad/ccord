# ccord

A small test for drawing simple coordinatesystems using the Canvas HTML element and JavaScript.

## Notes

### Ranges

The range scale sets the minimum and maximum value of the x- and y-coordinate. If an axis falls outside the bounds of the canvas, a warning is given that the axis is out of bounds. For example, if the minimum x-value is greater than 0, the y-axis will technically be to the left of the canvas, as the axes will always intersect in the origin.

### Tics

The tics value for the x- and y-axis is the value between two tics. So, if xTics is set to 2, it will start with a tic at the minium value, and then draw another one for every increase of 2 in x-value.
