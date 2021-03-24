// 1. Create a function that creates a new array with a given value
//   a. The function should take two parameters: the size of the array and the item to pass in
//   b. const someArrayFunc = (arraySize, valueToPass) => {'Code for function'}
//   c. expected result someArrayFunction(3, 'apples') = ['apples', 'apples', 'apples']

const someArrayFunc=(arraySize,valueToPass)=>{

  const arr=[];
  for (let i=0; i < arraySize; i++) {
    arr.push(valueToPass);
  }
  console.log(arr);
}

someArrayFunc(3,'apples');


// createNewArray(4,['banana']);
// 2. Reverse: Write a function that reverses the order of the items in the array
//   a. [1,2,3] = [3,2,1]


const reverseArray=(a)=>{
  
  newArray = a.reverse();
  console.log(newArray);

}
reverseArray(['banana','apple','grapes']);

// 3. Create a function that removes all unnecessary elements from an array
//   a. use this array: let dirtyArray = [1, 'apple', false, null, 'bananas', 45, '', 'alkali', undefined];
//   b. remove the falsy values so that the function returns: [1, 'apple', 'bananas', 45, 'alkali'];

const removeFalsyValues=(arr)=>{
  // debugger;
  let trueValues = []; 
   for (var i = 0; i < arr.length; i++) {
     if (arr[i]) {
      trueValues.push(arr[i]);
     }
   }
  return console.log(trueValues);

}
removeFalsyValues([1, 'apple', false, null, 'bananas', 45, '', 'alkali', undefined]);

// 4. Create a function that returns a duplicate free array
//   a. let duplicateArray = [1, 4, 9, 4, 100, 4, 30, 1]
//   b. the function should return [1, 4, 9, 100, 30]

const removeDuplicates=(duplicateArray)=>{
  
  let newArray = [...new Set(duplicateArray)];
  console.log(newArray);

}

removeDuplicates([1, 4, 9, 4, 100, 4, 30, 1]);