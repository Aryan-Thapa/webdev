const coding = ["js", "ruby", "java", "python", "cpp"];
// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((val) => {
//     console.log(val);
// });

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

const myCoding = [
  {
    language: "JavaScript",
    Lnaguagefilename: "JS",
  },
  {
    language: "C++",
    Lnaguagefilename: "cpp",
  },
  {
    language: "Python",
    Lnaguagefilename: "py",
  },
];

myCoding.forEach((item)=>{
    console.log(item.language);
})