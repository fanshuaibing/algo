var sufficientSubset = function (root, limit) {
  function dfs(root, prev) {
    if (!root) return null;
    if (!root.left && !root.right) {
      if (prev + root.val < limit) {
        return null;
      }
      return root;
    }

    root.left = dfs(root.left, prev + root.val);
    root.right = dfs(root.right, prev + root.val);
    if (!root.left && !root.right) {
      return null;
    }
    return root;
  }
  return dfs(root, 0);
};
