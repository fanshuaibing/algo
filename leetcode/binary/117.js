var connect = function (root) {
  if (!root) return root;
  let stack = [root];
  while (stack.length) {
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      let node = stack.shift();
      if (i !== len - 1) {
        node.next = stack[0];
      }
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }

  return root;
};
