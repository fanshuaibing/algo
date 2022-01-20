var maxPathSum = function (root) {
  let ans = -Infinity;
  function dfs(root) {
    if (!root) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    let value = root.val + left + right;
    let maxValue = Math.max(root.val, root.val + left, root.val + right);
    ans = Math.max(ans, value, maxValue);
    return maxValue;
  }
  dfs(root);
  return ans;
};
