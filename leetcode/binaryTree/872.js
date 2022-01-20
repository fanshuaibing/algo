var leafSimilar = function (root1, root2) {
  return getString(root1) === getString(root2);
};

function getString(root) {
  let ans = "head";
  function inorder() {
    if (!root) return;
    if (!root.left && !root.right) {
      ans = ans + "-" + root.val;
    }
    inorder(root.left);
    inorder(root.right);
  }
  inorder(root);
  return ans;
}
