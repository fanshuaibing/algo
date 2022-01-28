// 迭代解法
var reverseList = function (head) {
  let pre = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
};
// 递归解法
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};
