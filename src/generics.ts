interface Gen {
    length: number
}

function getLength<T extends Gen>(arg : T) : T {
    console.log(arg.length)
    return arg
}

getLength({length: 100})