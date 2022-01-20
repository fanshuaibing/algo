var recoverTree = function (root) {
  let first = null,
    second = null;
  let prev = Number.MIN_SAFE_INTEGER;

  function find(root) {
    if (!root) return;

    find(root.left);
    if (root.val < prev) {
      if (!first) {
        first = root;
      }
      second = root;
    }
    find(root.right);

    prev = root;
  }
  find(root);

  if (first && second) {
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
  }

  return root;
};
