var smallestFromLeaf = function (root) {
  let arr = [];
  let code = {};
  for (let i = 96; i < 123; i++) {
    code[i - 91] = String.fromCharCode(i);
  }
  console.log(code);

  function dfs(root, prev) {
    if (!root) {
      arr.push(prev);
      return;
    }
    dfs(root.left, prev + code[root.val]);
    dfs(root.right, prev + code[root.val]);
  }
  dfs(root, "");
  console.log(arr);
};
