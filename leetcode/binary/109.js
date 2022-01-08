var sortedListToBST = function (head) {
  function dfs(begin, end) {
    let mid = getMid(begin, end);
    let root = new TreeNode(mid.val);

    root.left = dfs(begin, mid);
    root.right = dfs(mid.next, end);
    return root;
  }
  return dfs(head, null);
};

function getMid(start, end) {
  let fast = start;
  let slow = start;
  while (fast !== end && fast.next !== end) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}
