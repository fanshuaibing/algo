var levelOrderBottom = function (root) {
  if (!root) return [];
  let queue = [root];
  let arr = [];
  let level = 0;
  while (queue.length) {
    let i = 0;
    const len = queue.length;
    while (i < len) {
      let node = queue.shift();
      arr[level] = arr[level] || [];
      arr[level].push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      ++i;
    }
    ++level;
  }

  return arr.reverse();
};
