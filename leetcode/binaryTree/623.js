var addOneRow = function (root, val, depth) {
  if (depth === 1) {
    return new TreeNode(val, root);
  }

  function traverse(root, d, position) {
    if (!root) return null;
    if (d === depth - 1) {
      let leftNode = new TreeNode(val, root.left, null);
      let rightNode = new TreeNode(val, null, root.right);
      root.left = leftNode;
      root.right = rightNode;
      return;
    }

    traverse(root.left, d + 1);
    traverse(root.right, d + 1);
  }

  traverse(root, 1, null);
  return root;
};
