var binaryTreePaths = function (root) {
  let ans = [];
  function dfs(root, str) {
    if (!root) return;
    if (!root.left && !root.right) {
      return ans.push(str ? str + "->" + root.val : str + root.val);
    }
    str = str ? str + "->" + root.val : root.val;
    dfs(root.left, str);
    dfs(root.right, str);
  }

  dfs(root, "");
  return ans;
};
