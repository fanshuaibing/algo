var constructMaximumBinaryTree = function (nums) {
  return dfs(nums, 0, nums.length - 1);
};

function dfs(nums, start, end) {
  if (start > end) return null;
  let [maxIndex, value] = getMax(nums, start, end);
  let root = new TreeNode(value);
  root.left = dfs(nums, start, maxIndex - 1);
  root.right = dfs(nums, maxIndex + 1, end);
  return root;
}

function getMax(nums, start, end) {
  let index = start,
    maxValue = null;
  for (let i = start; i <= end; i++) {
    if (nums[i] > maxValue || maxValue === null) {
      index = i;
      maxValue = nums[i];
    }
  }
  return [index, maxValue];
}
