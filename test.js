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
//console.log(sortArray([3, 2, 1, 4, 6, 5]))




function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];
    
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}


// console.log(quickSort([2,6,3,7,1,5,9,8,4]))


const mult = (a) => {
  return (b) => {
    return (c) => {
      return a * b* c
    }
  }
}
console.log(mult(1)(2)(3))


function binarySearch(arr, wanted) {
  // Границы подмассива для поиска
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {

          // центр подмассива
      let middle = start + Math.floor((end - start) / 2);
      if (comparator(arr[middle], wanted) === 0) return middle;

     // выбираем нужную половину
      if (comparator(arr[middle], wanted) < 0) start = middle + 1;
      else end = middle - 1;
  }

  return -1; // ничего не нашлось
}


function conBin(number) {
  let num = number;
  let binary = (num%2).toString() 
  for (; num > 1; ) {
    num = parseInt( num/2)
    binary = (num%2) + (binary)    
  }
  console.log(binary);
}


function bubbleSort(arr) {
let newArr = arr;
for (let i = 0; i < newArr.length; i++) {
  for (let j = 0; j < newArr.length; j++) {
    if(newArr[i]<newArr[j]) {
      let data = newArr[j]
      newArr[j] = newArr[i]
      newArr[i] = data
    }
  }  
}
return newArr;
}


const parseString = (string) => {
  return string
        .split('?')[1]
        .split('&')[0]
        .reduce((acc, item)=> ({...acc, [item.split('=')[0]]:[item.split['='][1]]}, {}))
}


const qickSort = (arr) => {
  if(arr.length<2 ) {
    return arr
  }
  let pivot = arr[0]
  let left = []
  let right = []

  for (let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }    
  }
  return [qickSort(...left), pivot, qickSort(...right)]
}


const insert = (arr) => {
  for (let i = 1; i < arr.length; i++) {
   for (let j = i - 1; j > -1; j--) {
    if(arr[j]> arr[j+1]) {
      [arr[j + 1], arr[j]] =  [arr[j], arr[j + 1]]
    }
   }    
  } return arr
}

const merge = (left, right) => {
let sortArray = []
while(left.length&&right.length) {
  if(left[0] > right[0]){
    sortArray.push(right.shift(0))
  } else {
    sortArray.push(left.shift(0))
  }
}
return [...sortArray, ...left, ...right]
}

const sorting = (arr) => {
  if(arr.length< 2) {
    return arr
  }

  let half = arr.length/2
  let left = arr.splice(0, half)
  let right = arr

  let array = merge(sorting(left), sorting(right))
  return array
}

const multipp = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c
    }
  }
}