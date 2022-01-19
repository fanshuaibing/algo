var tree2str = function (root) {
  if (!root) return "";
  if (!root.left && !root.right) return root.val + "";
  let left = tree2str(root.left);
  let right = tree2str(root.right);

  if (root.left && !root.right) {
    return root.val + `(${left})`;
  }

  if (!root.left && root.right) {
    return root.val + "()" + `(${right})`;
  }

  return root.val + `(${left})` + `(${right})`;
};
