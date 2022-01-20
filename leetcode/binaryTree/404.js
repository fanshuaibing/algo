var sumOfLeftLeaves = function (root) {
  let sum = 0;
  function traverse(root, position) {
    if (!root) return;
    if (!root.left && !root.right && position === "left") {
      sum = sum + root.val;
      return;
    }
    traverse(root.left, "left");
    traverse(root.right, "right");
  }

  traverse(root, "mid");
  return sum;
};
