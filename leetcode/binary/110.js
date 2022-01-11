var isBalanced = function (root) {
  let ans = true;

  function order(root) {
    if (!root) return 0;

    let left = order(root.left);
    let right = order(root.right);

    if (Math.abs(left - right) > 1) {
      ans = false;
    }

    return Math.max(left, right) + 1;
  }
  order(root);

  return ans;
};
