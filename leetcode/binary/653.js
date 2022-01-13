var findTarget = function (root, k) {
  if (!root.left && !root.right) return false;
  let list = inorder(root);

  let left = 0;
  let right = list.length - 1;

  while (left < right) {
    let sum = list[left] + list[right];
    if (sum === k) {
      return true;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return false;
};

function inorder(root) {
  let arr = [];
  function traverse(root) {
    if (!root) return;
    traverse(root.left);
    arr.push(root.val);
    traverse(root.right);
  }
  traverse(root);
  return arr;
}
