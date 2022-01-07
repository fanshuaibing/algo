/**
 * https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
 * @param root
 * @returns {number|*}
 */
var convertBST = function (root) {
  if (!root) return 0;
  let ans = 0;

  function dfs(node) {
    if (!node) return 0;
    dfs(node.right);
    node.val += ans;
    ans = node.val;
    dfs(node.left);
  }

  dfs(root);
  return root;
};
