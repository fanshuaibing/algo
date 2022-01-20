var BSTIterator = function (root) {
  this.index = 0;
  this.arr = [];
  inorder(root, this.arr);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.arr[this.index++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.index < this.arr.length;
};

function inorder(root, arr) {
  if (!root) return;
  inorder(root.left, arr);
  arr.push(root.val);
  inorder(root.right, arr);
}
