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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let arr = [];
  let level = 0;
  while (queue.length) {
    let i = 0;
    const len = queue.length;
    while (i < len) {
      let node = queue.shift();
      arr[level] = arr[level] || [];
      arr[level].push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      ++i;
    }
    ++level;
  }

  return arr;
};
