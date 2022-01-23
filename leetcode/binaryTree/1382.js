/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  let arr = [];

  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    arr.push(root.val);
    dfs(root.right);
  }
  dfs(root);

  function inorder(arr, start, end) {
    if (start > end) return null;
    let mid = parseInt((start + end) / 2);
    let root = new TreeNode(arr[mid]);
    root.left = inorder(arr, start, mid - 1);
    root.right = inorder(arr, mid + 1, end);
    return root;
  }
  return inorder(arr, 0, arr.length - 1);
};
