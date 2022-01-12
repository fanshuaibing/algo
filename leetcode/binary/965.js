var isUnivalTree = function (root) {
  let value = root.val;
  let ans = true;
  function traverse(root) {
    if (!root) return;
    if (root.val !== value) {
      ans = false;
      return;
    }
    traverse(root.left);
    traverse(root.right);
  }
  traverse(root);
  return ans;
};
