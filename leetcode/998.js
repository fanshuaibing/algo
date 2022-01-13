var insertIntoMaxTree = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }

  if (val > root.val) {
    let temp = root;
    root = new TreeNode(val);
    root.left = temp;
  } else {
    root.right = insertIntoMaxTree(root.right, val);
  }
  return root;
};
