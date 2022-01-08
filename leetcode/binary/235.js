var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;
  if (p.val > q.val) {
    return lowestCommonAncestor(root, q, p);
  }
  if (root.val >= p.val && root.val <= q.val) {
    return root;
  }
  if (root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (root.val < p.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
};
