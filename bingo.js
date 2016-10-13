function isSame(array, option){
  return array.every(elem => elem === option)
}

function getYAxisArray(inputArray, column){
  var newArray = [];
  inputArray.forEach(function(element, index, array){
    newArray.push(element[0])
  })
  return newArray
}

function yAxisValidator(inputArray, column, value){
  const yAsixArray = getYAxisArray(inputArray, column);
  return isSame(yAsixArray, value)
}

function xAxisValidator(inputArray, row, value){
  return isSame(inputArray[row], value)
}



let inputArray = [[1,0,0],[0,1,0],[0,0,0]];

// expect(xAxisValidator(inputArray,[0], 1)).toBe(false);
// expect(xAxisValidator(inputArray,[1], 1)).toBe(false);
// expect(xAxisValidator(inputArray,[2], 1)).toBe(false);
// expect(xAxisValidator(inputArray,[2], 0)).toBe(true);

//column validator
expect(yAxisValidator(inputArray,[0], 0)).toBe(false);


console.log("All tests passed!!!!");