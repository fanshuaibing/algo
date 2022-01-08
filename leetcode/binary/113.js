var pathSum = function (root, targetSum) {
  let ans = [];
  function build(root, prev) {
    if (!root) return;
    prev.push(root);
    if (!root.left && !root.right) {
      console.log(prev);
      if (targetSum === prev.reduce((acc, item) => acc + item.val, 0)) {
        ans.push(prev);
      }
    }

    build(root.left, prev);
    build(root.right, prev);
  }
  build(root, []);
  return ans;
};
