// const names: Array<string> = []; // string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Sam" }, { age: 21 });
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe([]));
