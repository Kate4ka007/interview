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
// bifurcateArray(array)
// console.log(res)


// insertion

function insertion(arr) {
  
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      if(arr[j+1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }    
    }    
  }
  return arr
}

//console.log(insertion([3,5,7,9,1,2,4,6,8]))


//buble

const sortArray = (arr) => {
  let newArr = [...arr]
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if(newArr[i] < newArr[j]) {
        let cur = newArr[i]
        newArr[i] = newArr[j]
        newArr[j] = cur
      }      
    }    
  } return(newArr)
}
console.log(sortArray([3, 2, 1, 4, 6, 5]))