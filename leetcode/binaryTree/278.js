var solution = function (isBadVersion) {
  return function (n) {
    function find(start, end) {
      if (start === end) return start;
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        return find(start, mid);
      } else {
        return find(mid + 1, end);
      }
    }

    return find(1, n);
  };
};
