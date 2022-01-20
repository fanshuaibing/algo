var levelOrderBottom = function (root) {
  if (!root) return root;
  let queue = [root];
  let arr = [];
  let level = 0;
  while (queue.length) {
    let i = 0;
    const len = queue.length;
    while (i < len) {
      let node = queue.shift();
      arr[level] = arr[level] || [];
      if (i % 2 === 0) {
        arr[level].push(queue[i]);
      } else {
        arr[level].unshift(queue[i]);
      }

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    ++level;
  }

  return arr.reverse();
};
