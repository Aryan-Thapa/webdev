const myObject = {
  js: "JavaScript",
  cpp: "C++",
  py: "Python",
  rb: "Ruby",
};

for (const key in myObject) {
  console.log(`${key} is a acronym for ${myObject[key]}`);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
for (const key in arr) {
    console.log(arr[key]);
}

// maps are not iterable using for in loop
