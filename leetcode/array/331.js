var isValidSerialization = function (preorder) {
  let ans = true;
  let arr = preorder.split(",");
  dfs(arr);
  function dfs(arr) {
    if (!arr.length) {
      ans = false;
      return;
    }
    let value = arr.shift();
    if (value === "#") return null;
    let root = new TreeNode(value);
    root.left = dfs(arr);
    root.right = dfs(arr);
    return root;
  }
  return ans && arr.length === 0;
};
