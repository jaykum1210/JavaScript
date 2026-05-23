const student = {
    fullname : "Jay Kumawat",
    age : 20,
};

console.log(student);
console.log(student.fullname);
console.log(student.age);



const company = {
    calculatetax(){
        console.log("Tax is Calculated");
    },
}

const emp1 = {
    salary : 100000,
};

const emp2 = {
    salary : 50000,
};


emp1.__proto__ = company;

console.log(emp1);
console.log(emp1.calculatetax);

// Class

class Toyota{
    constructor(){
        console.log("Constructor is called");
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
}

let fortuner = new Toyota();

fortuner.start();
fortuner.stop();


// Inheritance

class parent{
    hello(){
        console.log("Hii");
    }
}

class child extends parent{
    bye(){
        console.log("Bye");
    }
}

let childobj = new child();
childobj.hello;
childobj.bye;