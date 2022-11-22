export function hasIntersect(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value)).length !== 0
}
