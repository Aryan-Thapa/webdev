// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   when the function s are called,it creates a memory phase and execution phase for the function 
//   just like the main one.

// Understand call stack with the help of live demo :
// browser > inspect > Sources
// 1.then create a snippet by clicking on the arrow(>>) next to workspace
// 2.then write down some functions in the created snippet ,do save them by ctrl+S 
// 3.Create breakpoints and run the code and keep eye on call stack to visualize how it works.
