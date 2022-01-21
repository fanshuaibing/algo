/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  function dfs(preorder, start, end) {
    if (start > end) {
      return null;
    }

    let rootVal = preorder[start];
    let root = new TreeNode(rootVal);
    let p = start + 1;
    while (p <= end && preorder[p] < rootVal) {
      p++;
    }

    root.left = dfs(preorder, start + 1, p - 1);
    root.right = dfs(preorder, p, end);
    return root;
  }
  return dfs(preorder, 0, preorder.length - 1);
};
