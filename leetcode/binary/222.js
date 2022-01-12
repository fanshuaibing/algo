var countNodes = function (root) {
  if (!root) return;
  return countNodes(root.left) + countNodes(root.right) + 1;
};
