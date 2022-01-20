var verticalTraversal = function (root) {
  let nodeHash = {};

  function traverse(root, row, col) {
    if (!root) return root;
    let node = new Node(root.val, row);
    nodeHash[col] = nodeHash[col] ? nodeHash[col].concat(node) : [node];
    traverse(root.left, row + 1, col - 1);
    traverse(root.right, row + 1, col + 1);
  }
  traverse(root, 0, 0);

  let keys = Object.keys(nodeHash);
  keys.forEach((key) => {
    nodeHash[key].sort((a, b) => a.row - b.row || a.val - b.val);
  });

  keys.sort((a, b) => a - b);
  return keys.map((key) => {
    return nodeHash[key].map((node) => node.val);
  });
};

function Node(val, row) {
  this.val = val;
  this.row = row;
}
