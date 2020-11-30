/* ------------------------ Objects Destructuring */

/* ------------ Normal approach */
const PI = Math.PI
const E = Math.E
const SQRT2 = Math.SQRT2;

/* ------------ Destructuring */
const {PI, E, SQRT2} = Math;

/* ------------ Another Example */
const myCircle = {
  label: 'circleX',
  radius: 10
}

const circleArea = ({radius}) => {
  return Math.PI * radius * radius;
}

console.log(circleArea(myCircle))

/* - This functions expects an object as an argument and that object should have a 'radius' property. */

/* ------------ Same example with default value as an argument */

const myCircle = {
  label: 'circleX',
  radius: 10
}

const circleArea = ({radius}, {precision = 2} = {}) => {
  return (Math.PI * radius * radius).toFixed(precision);
}

console.log(circleArea(myCircle))

/* 
- Two things are done here:
  - Assigned a default value to 'Object Destructuring' syntax.
  - Made the second argument optional.
 */