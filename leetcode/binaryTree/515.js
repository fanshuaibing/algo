var largestValues = function (root) {
  if (!root) return [];
  let queue = [root];
  let ans = [];

  while (queue.length) {
    let len = queue.length;

    let max = -Infinity;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.val > max) {
        max = node.val;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    ans.push(max);
  }
  return ans;
};
