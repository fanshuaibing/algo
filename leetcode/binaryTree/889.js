var constructFromPrePost = function (preorder, postorder) {
  function build(preorder, preStart, preEnd, postorder, postStart, postEnd) {
    if (preStart > preEnd) {
      return null;
    }
    if (preStart === preEnd) {
      return new TreeNode(preorder[preStart]);
    }

    let rootValue = preorder[preStart];
    let leftValue = preorder[preStart + 1];

    let index = postStart;

    for (let i = postStart; i < postEnd; i++) {
      if (postorder[i] === leftValue) {
        index = i;
      }
    }

    let leftSize = index - postStart + 1;

    let root = new TreeNode(rootValue);

    root.left = build(
      preorder,
      preStart + 1,
      preStart + leftSize,
      postorder,
      postStart,
      index
    );

    root.right = build(
      preorder,
      preStart + leftSize + 1,
      preEnd,
      postorder,
      index + 1,
      postEnd - 1
    );

    return root;
  }

  return build(
    preorder,
    0,
    preorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
};
