var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;

  if (root === p || root === q) {
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);

  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }
  // 情况 2
  if (left === null && right === null) {
    return null;
  }
  // 情况 3
  return left || right;
};
