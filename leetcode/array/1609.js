var isEvenOddTree = function (root) {
  let ans = true;
  let stack = [root];
  let row = 1;
  while (stack.length) {
    let len = stack.length;
    let midStack = [];
    for (let i = 0; i < len; i++) {
      let current = stack.shift();

      if (row % 2 === 1) {
        if (
          (i !== len - 1 && current.val >= stack[0].val) ||
          current.val % 2 === 0
        ) {
          ans = false;
          return false;
        }
      } else {
        if (
          (i !== len - 1 && current.val <= stack[0].val) ||
          current.val % 2 === 1
        ) {
          ans = false;
          return false;
        }
      }
      current.left && stack.push(current.left);
      current.right && stack.push(current.right);
    }
    row++;
  }
  return ans;
};
