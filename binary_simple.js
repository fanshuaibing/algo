const Find = (arr, target) => {
  if (arr.length === 0) return -1
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (target === arr[mid]) {
      return mid
    } else if (arr[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

console.log(Find([1, 2, 3, 4, 5, 6], 2));