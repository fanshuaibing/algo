var findFrequentTreeSum = function (root) {
  let hash = {};
  let max = 0;
  let maxKeys = [];
  function traverse(root) {
    if (!root) return 0;
    let left = traverse(root.left);
    let right = traverse(root.right);
    let sum = root.val + left + right;
    hash[sum] = (hash[sum] || 0) + 1;
    return sum;
  }
  traverse(root);

  Object.keys(hash).forEach((key, index) => {
    if (hash[key] > max) {
      max = hash[key];
      maxKeys = [key];
    } else if (hash[key] === max) {
      maxKeys.push(key);
    }
  });

  return maxKeys;
};
