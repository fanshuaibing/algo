var maxLevelSum = function (root) {
  let ans = 1;
  let max = -Infinity;
  let depth = 1;
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    let sum = queue.reduce((acc, num) => acc + num.val, 0);
    if (sum > max) {
      ans = depth;
      max = sum;
    }

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    depth++;
  }
  return ans;
};
