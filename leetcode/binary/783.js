var minDiffInBST = function (root) {
  if (!root) return 0;
  let ans = Infinity;

  let prev = null;
  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    if (prev !== null) {
      ans = Math.min(ans, root.val - prev);
    }
    prev = root.val;
    dfs(root.right);
  }
  dfs(root);
  return ans;
};
