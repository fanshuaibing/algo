var findSecondMinimumValue = function (root) {
  if (!root.left && !root.right) return -1;
  let list = [];
  inorder(root);
  list.sort();
  let min = list[0];
  let index = list.findIndex((num) => num > min);

  return index === -1 ? -1 : list[index];

  function inorder(root) {
    if (!root) return;
    list.push(root.val);
    inorder(root.left);
    inorder(root.right);
  }
};
