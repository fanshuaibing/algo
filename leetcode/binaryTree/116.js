var connect = function (root) {
  if (!root) return null;
  function dfs(node1, node2) {
    if (!node1 || !node2) return;
    node1.next = node2;
    dfs(node1.left, node1.right);
    dfs(node2.left, node2.right);
    dfs(node1.right, node2.left);
  }
  dfs(root.left, root.right);

  return root;
};
