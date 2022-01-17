var findMode = function (root) {
  const hash = {};
  let max = 0;
  let maxKeys = [];
  function traverse(root) {
    if (!root) return;
    if (hash[root.val]) {
      hash[root.val] = hash[root.val] + 1;
    } else {
      hash[root.val] = 1;
    }

    traverse(root.left);
    traverse(root.right);
  }

  traverse(root);
  let keys = Object.keys(hash);

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let val = hash[key];
    if (val > max) {
      max = val;
      maxKeys = [key];
    } else if (val === max) {
      maxKeys.push(key);
    }
  }
  return maxKeys;
};
