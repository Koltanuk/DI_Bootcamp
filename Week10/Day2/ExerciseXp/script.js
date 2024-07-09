//Exercise1

function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve(`${num} is less than or equal to 10`);
      } else {
        reject(`${num} is greater than 10`);
      }
    });
  }
  
  // Test cases
  compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));

//Exercise2

function resolveInFourSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("success");
      }, 4000);
    });
  }
  
resolveInFourSeconds().then((message) => console.log(message));

//Exercise3

const resolvedPromise = Promise.resolve(3);

const rejectedPromise = Promise.reject("Boo!");

resolvedPromise.then(value => console.log(value));

rejectedPromise.catch(error => console.log(error));
