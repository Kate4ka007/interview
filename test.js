let array = [1, 7, 3, 9, 8, 4, 5, 2, 6, 10]

function merge (left, right) {
  let sortArray = []

  while (left.length && right.length) {
    if(left[0] < right[0]) {
      sortArray.push(left.shift())
    } else {
      sortArray.push(right.shift())
    }
  }
  return [...sortArray, ...left, ...right]
}

let res



function bifurcateArray(arr) {
  if(arr.length <= 1) {
    return arr;
  }

  const half = arr.length/2;

  let left = arr.splice(0, half)
  let right = arr
  res = merge(bifurcateArray(left), bifurcateArray(right))

  return res
}
bifurcateArray(array)
console.log(res)

