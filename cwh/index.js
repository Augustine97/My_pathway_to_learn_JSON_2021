

// let jsonObj = {
//     "name" : "Harry",
//     "channel" : "CWH",
//     "friend" : "rohan",
//     "food":"soyabeans"

// }
 const jsonObj = require('./index.json');


console.log(jsonObj);
 let   myJsonStr = JSON.stringify(jsonObj);

// //convert the jsonobj to string
console.log(myJsonStr);


//  // checking the type jsonSTR
console.log(typeof myJsonStr);

// //checking some of the string methods
console.log(myJsonStr.length);
console.log(myJsonStr);
console.log(myJsonStr[3]);
console.log(myJsonStr.includes('Harry'));
myJsonStr = myJsonStr.replace("Harry","Manu");
console.log(myJsonStr);

// //convert the string back to object
newjsonObj = JSON.parse(myJsonStr);
console.log(newjsonObj);