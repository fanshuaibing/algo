var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  function inorder(nums, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);

    let root = new TreeNode(nums[mid]);

    root.left = inorder(nums, start, mid - 1);
    root.right = inorder(nums, mid + 1, end);
    return root;
  }
  return inorder(nums, 0, nums.length - 1);
};
