function build(start, end) {
  let res = [];
  if (start > end) {
    res.push(null);
    return res;
  }

  for (let i = start; i <= end; i++) {
    let leftTree = build(start, i - 1);
    let rightTree = build(i + 1, end);
    // 第 i 节点穷举所有左右子树的组合
    for (let left of leftTree) {
      for (let right of rightTree) {
        let node = new TreeNode(i);
        node.left = left;
        node.right = right;
        res.push(node);
      }
    }
  }

  return res;
}
var generateTrees = function (n) {
  return build(1, n);
};
