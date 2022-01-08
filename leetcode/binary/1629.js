/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let word = keysPressed[0],
    time = releaseTimes[0];

  for (let index = 1; index < keysPressed.length; index++) {
    let t = releaseTimes[index] - releaseTimes[index - 1];
    let w = keysPressed[index];
    if ((t >= time && w >= word) || t > time) {
      word = w;
      time = t;
    }
  }
  return word;
};
