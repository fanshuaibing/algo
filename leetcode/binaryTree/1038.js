var bstToGst = function (root) {
  if (!root) return;
  let prev = 0;
  function dfs(root) {
    if (!root) return 0;
    dfs(root.right);
    root.val = root.val + prev;
    prev = root.val;
    dfs(root.left);
  }
  dfs(root);
  return root;
};
