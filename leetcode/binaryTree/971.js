var flipMatchVoyage = function (root, voyage) {
  let arr = [];
  let hasDiff = false;
  let index = 0;
  function preOrder(root) {
    if (!root) return;
    if (root.val !== voyage[index++]) {
      hasDiff = true;
    }
    if (root.left && root.right && root.left.val !== voyage[index]) {
      let temp = root.left;
      root.left = root.right;
      root.right = temp;
      arr.push(root.val);
    }
    preOrder(root.left);
    preOrder(root.right);
  }
  preOrder(root);

  return !hasDiff ? arr : [-1];
};
