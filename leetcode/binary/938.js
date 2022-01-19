var rangeSumBST = function (root, low, high) {
  let ans = 0;
  function dfs(root) {
    if (!root) return;
    if (root.val >= low && root.val <= high) {
      ans += root.val;
    }
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  return ans;
};
