var numColor = function (root) {
  let set = new Set();

  function traverse(root) {
    if (!root) return;

    if (!set.has(root.val)) {
      set.add(root.val);
    }
    traverse(root.left);
    traverse(root.right);
  }
  traverse(root);

  return set.size;
};
