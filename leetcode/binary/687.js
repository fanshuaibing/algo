var longestUnivaluePath = function (root) {
  if (!root) return 0;
  let ans = 0;
  function traverse(root, parentVal) {
    if (!root) return 0;
    let left = traverse(root.left, root.val);
    let right = traverse(root.right, root.val);

    ans = Math.max(ans, left + right);
    if (parentVal !== root.val) {
      return 0;
    }
    return 1 + Math.max(left, right);
  }
  traverse(root, root.val);
  return ans;
};
