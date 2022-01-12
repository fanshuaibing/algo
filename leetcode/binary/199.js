var rightSideView = function (root) {
  if (!root) return [];
  let ans = [];
  let stack = [root];
  while (stack.length) {
    let len = stack.length;
    let last = stack[0];
    for (let i = 0; i < len; i++) {
      let node = stack.shift();
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
    ans.push(last.val);
  }
  return ans;
};
