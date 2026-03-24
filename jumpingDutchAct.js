/*

https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript

Mr. despair wants to jump off Dutch act, So he came to the top of a building.

Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

Input: floor, The height of the building (floor)

Output: a string, The voice of despair(When jumping Dutch act)

Example:
sc(2) should return "Aa~ Pa! Aa!"

*/

function sc(floor) {
  return floor <= 1 ? "" : floor <= 6 ? "Aa~ ".repeat(floor- 1) + "Pa! Aa!" : "Aa~ ".repeat(floor-1) + "Pa!";
}
