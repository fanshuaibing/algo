var increasingBST = function (root) {
  let arr = [];
  function inorder(root) {
    if (!root) return;
    inorder(root.left);
    arr.push(root.val);
    inorder(root.right);
  }

  inorder(root, arr);
  let dummyNode = new TreeNode(-1);
  let currentNode = dummyNode;
  for (const arrElement of arr) {
    let node = new Node(arrElement);
    currentNode.right = node;
    currentNode = node;
  }
  return dummyNode.right;
};
