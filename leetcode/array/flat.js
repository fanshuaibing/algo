const flat = (arr) => {
  return arr.reduce((acc, cur) => {
    if (cur instanceof Array) {
      return acc.concat(flat(cur));
    } else {
      return acc.concat(cur);
    }
  }, []);
};

console.log(flat([111, [222, 9999, 10000, [111]], 222]));
