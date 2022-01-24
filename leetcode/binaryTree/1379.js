var getTargetCopy = function (original, cloned, target) {
  let ans = null;
  function traverse(root) {
    if (!root) return;
    if (root === target) {
      ans = root;
    }
    traverse(root.left);
    traverse(root.right);
  }
  return ans;
};
