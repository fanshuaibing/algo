var lcaDeepestLeaves = function (root) {
  if (!root) return 0;

  function maxDepth(root) {
    if (!root) {
      return new Result(null, 0);
    }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    console.log(left.depth, right.depth, "depth");
    if (left.depth === right.depth) {
      return new Result(root, left.depth + 1);
    }

    let res = left.depth > right.depth ? left : right;
    res.depth++;
    return res;
  }
  return maxDepth(root).node;
};

function Result(node, depth) {
  this.node = node;
  this.depth = depth;
}
