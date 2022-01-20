var hasPathSum = function (root, targetSum) {
  let prev = 0;
  let ans = false;

  function build(root, prev) {
    if (!root) return;
    if (!root.left && !root.right) {
      if (root.val + prev === targetSum) {
        ans = true;
      }
    }
    build(root.left, prev + root.val);
    build(root.right, prev + root.val);
  }

  build(root, 0);

  return ans;
};
