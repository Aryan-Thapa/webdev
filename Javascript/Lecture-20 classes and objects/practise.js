let data="info";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("website data=",data);
    }
}
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        data="some new values";
    }
}
let student1=new user("Aryan","aryanthapa219@gmail.com");
let student2=new user("Archit","architydv02@gmail.com");
let admin1=new admin("Admin","admin@college.com");
 
