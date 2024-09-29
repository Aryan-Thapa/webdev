// Promise creation
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task like Db calls,cryptography,network
  setTimeout(() => {
    console.log("Async task is complete");
    resolve(); //jab resolve ko call kiya tab connect hua .then se
  }, 1000);
});

// Promise creation
// resolve ka connection hai .then ke saath
promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async task 2 resolved");
});

// passing data through resolve
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "aryan", email: "aryan@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  // logs the data received through resolve
  console.log(user);
});

// handling error using reject method
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Aryan", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// promise chaining
promiseFour
  .then((user) => {
    console.log(user);
    return user.username; //this will be passed to the next .then
  })
  .then((username) => {
    console.log("username:", username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

// consuming a promise using async await
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// fetch method

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json(); //response.json also takes time in converting so we have to use await with it.
//     console.log("api data:", data);
//   } catch (error) {
//     console.log("error:", error);
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Api data:", data);
  })
  .catch((error) => console.log(error));
