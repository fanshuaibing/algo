var pruneTree = function (root) {
  if (root === null) {
    return root;
  }
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  if (!root.left && !root.right && root.val === 0) {
    return null;
  }
  return root;
};
