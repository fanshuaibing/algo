var goodNodes = function (root) {
  let ans = 0;
  function dfs(root, max) {
    if (!root) return;
    if (root.val >= max) {
      ans++;
      max = root.val;
    }
    dfs(root.left, max);
    dfs(root.right, max);
  }
  dfs(root, -Infinity);
  return ans;
};
