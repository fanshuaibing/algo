var sumRootToLeaf = function (root) {
  let arr = [];

  function dfs(root, prev) {
    if (!root) return;
    if (!root.left && !root.right) {
      arr.push(prev + root.val);
      return;
    }
    dfs(root.left, prev + root.val);
    dfs(root.right, prev + root.val);
  }
  dfs(root, "");
  return arr.reduce((acc, item) => acc + parseInt(item, 2), 0);
};
