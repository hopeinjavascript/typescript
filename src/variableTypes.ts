//variables
let num: number  = 3
num = 4
let str = 'akshay' // type inference by typescript- i didnt specify it to be a string variable yet it did.
str = 'sood'
let isDev: boolean = true
isDev = false
//you can do this too
let myVoid: void
let myNull: null
let myUndefined: undefined

// unions
let id : number | string | Function
id = 28
id = 'qwerty'
id = () => { return 'hello'}

// arrays
let names: string[] = ['akshay', 'john', 'jack']

//objects
let obj: {name: string, age: number}[] = [{name: 'John', age:32}, {name: 'Akshay', age: 28}]

// tuple
let person: [string, number] = ['akshay', 28] // it has to be in the same order and can contain only single record
let persons: [string, number][] =[['akshay', 28], ['john', 32]] // array of tuples

// type to declare string, number, boolean, object etc
type num1 = number
type num2 = number
type str1 = string
type bool1 = boolean
type arr1 = number[]
type fn1 = (num1: num1, num2: num2) => number
type FullName = {f_name: string, l_name: string, marks?: arr1}

