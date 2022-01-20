var findTilt = function (root) {
  if (!root) return 0;
  let ans = 0;

  function sum(root) {
    if (!root) return 0;
    let left = sum(root.left);
    let right = sum(root.right);
    ans += Math.abs(left - right);
    return root.val + left + right;
  }
  sum(root);
  return ans;
};
