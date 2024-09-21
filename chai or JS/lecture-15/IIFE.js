// Immediatedly invoked function expression (IIFE) are useeful for encapsulating the code and avoids name conflicts and keeps the global scope clean by creating private scope for variables and functions
(function chai() {
  console.log("DB Connected");
})(); //named IIFE

((name)=>{
    console.log(`DB CONNECTED AGAIN ${name}`);
})("Aryan"); 

