var searchRange = function (nums, target) {
  let index = nums.indexOf(target);
  let lastIndex = nums.lastIndexOf(target);
  return [index, lastIndex];
};
