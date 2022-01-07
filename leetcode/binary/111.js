// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/




var minDepth = function(root) {
  if(!root) return 0
  let arr = [root]
  let ans = 0

  while (arr.length){
    const len = arr.length
    let i = 0
    while(i < len){
      let node = arr.shift()
      if(!node.left && !node.right){
        return ans
      }
      if(node.left){
        arr.push(node.left)
      }

      if(node.right){
        arr.push(node.right)
      }
      ++i
    }
    ++ans
  }
  return  ans + 1
};
