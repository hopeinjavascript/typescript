// return number
function add (num1: number, num2: number): number {
    return num1 + num2;
}

// return string
function fullName (firstName: string, lastName: string, salutation?: string): string {
    return firstName + ' ' + lastName + ' ' + salutation;
}

//return nothing - void
function voidFunction(): void {
    return
}

//function
function printSum (sum : fn1) {
    console.log(sum(2,3))
}

function printFullName(fullName: FullName) : void {
   console.log(`${fullName.f_name} ${fullName.l_name}`)
}


// declare object type and return number
type NumsAndOperation = {num1 : number; num2 : number, operation : string}

function calc(numsAndOperation : NumsAndOperation ) : number {
    const {num1, num2, operation} = numsAndOperation

    if (operation == 'add') return num1 + num2
    if (operation == 'sub') return num1 - num2
    if (operation == 'div') return num1 / num2
    if (operation == 'mul') return num1 * num2
    if (operation == 'mod') return num1 % num2

    return 0
}

calc({num1: 10, num2: 5,operation: 'add'})