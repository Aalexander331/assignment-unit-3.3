console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(partsNeeded);
// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges = ['3', '5', '-6', '0', '7', '11'];

// 3. Console log the value of the second item in the 'supplyChanges' array

    console.log('3. Second supplyChange is:', supplyChanges[1]);
    console.log('Array of supplyChanges:', supplyChanges)

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
console.log(supplyChanges.pop(5));
// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
count = supplyChanges.push('25');
console.log(count);
console.log(supplyChanges);


// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
let SupplyChanges = ['3', '5', '-6', '0', '7', '11'];

for(let i = 0; i < supplyChanges.length; i++) {
  console.log(supplyChanges[i]);
}
