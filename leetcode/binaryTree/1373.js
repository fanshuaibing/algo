var maxSumBST = function (root) {
  let maxSum = 0;
  function traverse(root) {
    if (!root)
      return {
        isBst: true,
        max: Number.MIN_SAFE_INTEGER,
        min: Number.MAX_SAFE_INTEGER,
        sum: 0,
      };

    let left = traverse(root.left);
    let right = traverse(root.right);
    let res = {};
    if (
      left.isBst &&
      right.isBst &&
      root.val < right.min &&
      root.val > left.max
    ) {
      res.isBst = true;
      res.min = Math.min(left.min, root.val);
      res.max = Math.max(right.max, root.val);
      res.sum = left.sum + right.sum + root.val;
      maxSum = Math.max(res.sum, maxSum);
    } else {
      res.isBst = false;
    }
    return res;
  }
  traverse(root);
  return maxSum;
};
