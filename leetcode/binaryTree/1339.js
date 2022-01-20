var maxProduct = function (root) {
  let sum = 0;
  let ans = 0;

  sum = getSum(root);

  function getSum(root) {
    if (!root) return 0;
    let leftSum = getSum(root.left);
    let rightSum = getSum(root.right);

    let rootSum = leftSum + rightSum + root.val;
    if (sum) {
      ans = Math.max(ans, (sum - rootSum) * rootSum);
    }
    return rootSum;
  }

  return ans % (Math.pow(10, 9) + 7);
};
