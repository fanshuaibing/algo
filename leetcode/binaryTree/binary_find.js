
/**
 * 查找第一个等于给定值的元素
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */

const findFirst = (arr, target) => {
  if (arr.length === 0) return -1
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (arr[mid] === target) {
      if (mid === 0 || arr[mid - 1] !== target) { return mid }
      else {high = mid - 1}
      
    } else if (arr[mid] > target) {
      high = mid -1
    } else {
      low = mid + 1
    }
  }
  return -1
}

/**
 * 查找最后一个等于给定值的元素
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */
const findLast = (arr, target) => {
  if (arr.length === 0) return -1
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (arr[mid] === target) {
      if (mid === 0 || arr[mid + 1] !== target) { return mid }
      else {low = mid + 1}
      
    } else if (arr[mid] > target) {
      high = mid -1
    } else {
      low = mid + 1
    }
  }
  return -1
}

/**
 * 查找第一个大于等于给定值的元素
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */

const findFirstBig = (arr, target) => {
  if (arr.length === 0) return -1
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (arr[mid] >= target) {
      if (mid === 0 || arr[mid - 1] < target) { return mid }
      else {high = mid - 1}
    } else {
      low = mid + 1
    }
  }
  return -1
}

/**
 * 查找最后一个小于等于给定值的元素
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */

const findLastSmall = (arr, target) => {
  if (arr.length === 0) return -1
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (arr[mid] > target) {
      high = mid - 1
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] > target) {
        return mid
      } else {
        low = mid + 1
      }
    }
  }
  return -1
}








const arr = [1, 2, 3, 4, 4, 4, 4, 4, 6, 7, 8, 8, 9]
const first = findFirst(arr, 4)
console.log(`FindFirst: ${first}`)

const last = findLast(arr, 4)
console.log(`FindLast: ${last}`)
const FisrtBig = findFirstBig(arr, 5)
console.log(`FindFisrtBig: ${FisrtBig}`)
const LastSmall = findLastSmall(arr, 4)
console.log(`FindLastSmall: ${LastSmall}`)
