var distanceK = function (root, target, k) {
  const parentMap = new Map();
  const ans = [];

  function traverse(root, parentNode) {
    if (!root) return;
    parentMap.set(root.val, parentNode);
    traverse(root.left, root);
    traverse(root.right, root);
  }

  traverse(root, null);

  let queue = [target];
  let dist = 0;
  let visited = new Set();
  visited.add(target.val);

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let current = queue.shift();

      if (dist === k) {
        ans.push(current.val);
      }

      let parentNode = parentMap.get(current.val);
      if (parentNode && !visited.has(parentNode.val)) {
        queue.push(parentNode);
        visited.add(parentNode.val);
      }

      if (current.left && !visited.has(current.left.val)) {
        queue.push(current.left);
        visited.add(current.left.val);
      }
      if (current.right && !visited.has(current.right.val)) {
        queue.push(current.right);
        visited.add(current.right.val);
      }
    }

    dist++;
  }

  return ans;
};
