// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 7){
        console.log("Thala for a Reason");
    }
    console.log(element);
}
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 7){
        console.log("Thala for a Reason");
        continue;
    }
    console.log(element);
}