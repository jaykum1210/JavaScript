Data = "Student Portal";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewdata(){
        console.log(`Name : ${this.name} Email : ${this.email}`);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data = "New Data";
    }
}