var getMinimumDifference = function (root) {
  let ans = Infinity;
  function traverse(root, prev) {
    if (!root) return;
    traverse(root.left, prev);
    if (prev) {
      ans = Math.min(ans, Math.abs(root.val - prev.val));
    }
    prev = root;
    traverse(root.right, prev);
  }
  traverse(root, 0);
  return ans;
};
