var isCompleteTree = function (root) {
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let current = queue.shift();
      if (!current && queue[0]) {
        return false;
      }
      queue.push(current.left);
      queue.push(current.right);
    }
  }

  return true;
};
