var moveZeroes = function (nums) {
  const length = nums.length;
  let j = 0;
  for (let i = 0; i < length; i++) {
    if (nums[i]) {
      nums[j] = nums[i];
      j++;
    }
  }

  for (let i = j; i < length; i++) {
    nums[i] = 0;
  }
  return nums;
};
