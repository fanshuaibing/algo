var maxDepth = function (s) {
  let depth = 0;
  let arr = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] === "(") {
      arr.push("(");
      depth = Math.max(depth, arr.length);
    }

    if (s[i] === ")") {
      arr.pop();
    }

    ++i;
  }

  return depth;
};
