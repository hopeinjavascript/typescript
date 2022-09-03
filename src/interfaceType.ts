// interfaces are nothing but contracts any variables/objects/types
// using it should follow the contract/structure defined in the interface

interface Person {
    readonly id: number, // readonly because ids usually should not be modified
    name: string,
    age?: number,
    printPersonDetails?: (person: Person) => void
}


function printPersonDetails(person: Person) {
    const {id, name, age} = person
    const str = `${id} ${name} ${age}`
    console.log(str)
}

printPersonDetails({id :1, name: 'John'})