var findBottomLeftValue = function (root) {
  if (!root) return;
  let queue = [root];
  let res = null;

  while (queue.length) {
    let len = queue.length;
    res = queue[0];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return res.val;
};
