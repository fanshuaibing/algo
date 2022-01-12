const serialize = (root) => {
  if (root == null) {
    // 遍历到 null 节点
    return "#";
  }
  const left = serialize(root.left); // 左子树的序列化结果
  const right = serialize(root.right); // 右子树的序列化结果
  return root.val + "," + left + "," + right; // 按  根,左,右  拼接字符串
};

var deserialize = function (data) {
  let arr = data.split(",");

  function build(arr) {
    if (!arr.length) return null;
    let root = new TreeNode(arr.shift());
    if (root.val === "#") {
      return null;
    }

    root.left = build(arr);
    root.right = build(arr);
    return root;
  }
  return build(arr);
};
