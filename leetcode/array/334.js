var increasingTriplet = function (nums) {
  if (nums.length < 3) {
    return false;
  }
  let small = Number.MAX_SAFE_INTEGER;
  let mid = Number.MAX_SAFE_INTEGER;
  for (const num of nums) {
    if (num <= small) {
      small = num;
    } else if (num <= mid) {
      mid = num;
    } else {
      return true;
    }
  }
  return false;
};
