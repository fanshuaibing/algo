var isValidBST = function (root) {
  if (!root) return root;

  function dfs(root, min, max) {
    if (!root) return true;

    if (min && root.val <= min) return false;
    if (max && root.val >= max) return false;

    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }

  return dfs(root, null, null);
};

{
  // 中序遍历

  var isValidBST = function (root) {
    if (!root) return true;
    let prev = Number.MIN_SAFE_INTEGER;
    let ans = true;
    function dfs(root) {
      if (!root) return true;
      dfs(root.left);
      if (root.val > prev) {
        prev = root.val;
      } else {
        ans = false;
        return;
      }
      dfs(root.right);
    }
    dfs(root);
    return ans;
  };
}
