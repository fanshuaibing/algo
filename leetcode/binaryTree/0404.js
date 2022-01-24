var isBalanced = function (root) {
  let ans = true;
  function traverse(root) {
    if (!root) return 0;

    let left = traverse(root.left);
    let right = traverse(root.right);
    if (Math.abs(right - left) > 1) {
      ans = false;
      return;
    }
    return Math.max(left, right) + 1;
  }
  traverse(root);
  return ans;
};
