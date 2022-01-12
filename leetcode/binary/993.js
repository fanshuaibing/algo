var isCousins = function (root, x, y) {
  let res = [];

  function traverse(root, depth, parent) {
    if (!root) return;
    if (root.val === x || root.val === y) {
      res.push({ root: root, depth, parent });
    }

    traverse(root.left, depth + 1, root);
    traverse(root.right, depth + 1, root);
  }
  traverse(root, 0, null);

  return res[0].depth === res[1].depth && res[0].parent !== res[1].parent;
};
