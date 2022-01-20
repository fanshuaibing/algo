var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  let can = Math.pow(2, 32) - 1;
  root.val = 1;
  let queue = [root];
  let maxWidth = 0;
  while (queue.length) {
    let len = queue.length;
    let left = queue[0];
    let right = queue[len - 1];

    for (let i = 0; i < len; i++) {
      let root = queue.shift();
      if (root.left) {
        root.left.val = (root.val * 2) % can;
        queue.push(root.left);
      }
      if (root.right) {
        root.right.val = (root.val * 2 + 1) % can;
        queue.push(root.right);
      }
    }

    maxWidth = Math.max(maxWidth, right.val - left.val + 1);
  }
  return maxWidth;
};
