/*
There are three access modifiers -
1. public (default)
2. private (cannot be accessed outside the class or anywhere)
3. protected (cannot be accessed outside the class but in the subclass)
*/

// Class is a blueprint to create objects and keeps a separate copy of each object with its data "intact"
class User {

    // private field are only accessible inside the class
    private name: string;
    private email: string;
    private age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    //getter
    getName(): string {
        return (this.name);
    }

    // setter
    // you can set return type to this too!
    setName(name: string): this {
        this.name = name;
        return this
    }
}

const akshay = new User('Akshay', 'asood@gmail.com', 28);
akshay.setName('Aksh')
console.log(akshay.getName())


//subclass - Inheritance
class PaidUser extends User {
    credits: number;

    constructor( name: string, email: string, age: number, credits: number) {
        super(name, email, age); // to class super class constructor
        this.credits = credits;
    }

    // getter
    getCredits() : number {
        return this.credits;
    }

    // setter
    // you can set return type to this too!
    setCredits(credits: number): this {
        this.credits = credits
        return this
    }
}

const paidUser = new PaidUser('John', 'john@gmail.com', 34, 1000);
console.log(paidUser.getName())
console.log(paidUser.getCredits())
console.log(paidUser.setCredits(2000).getCredits())