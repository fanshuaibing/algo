var isSubPath = function (head, root) {
  if (root == null) return 0;
  return (
    dfs(root, head) || isSubPath(head, root.left) || isSubPath(head, root.right)
  );
};

var dfs = function (root, head) {
  if (head == null) return true;
  if (root == null) return false;
  if (root.val !== head.val) return false;
  return dfs(root.left, head.next) || dfs(root.right, head.next);
};
