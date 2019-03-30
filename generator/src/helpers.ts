enum rollType {
    Normal,
    DoubleRoll
}

function rollD(modifier: number = 0, onlyOne: boolean = false): number {
    if (onlyOne) {
        return Math.floor(Math.random() * 6) + 1
    } else {
        let one = Math.floor(Math.random() * 6) + 1
        let two = Math.floor(Math.random() * 6) + 1
        return one + two + modifier
    }
}

function rollDD(): number {
    let tens = rollD(0, true)
    let ones = rollD(0, true)
    tens = tens * 10;
    return tens + ones
}

function getRandomElement<T>(element: T[]): T {
   return  element[Math.ceil(Math.random() * element.length + 1)]
}

export {getRandomElement}
export { rollD }
export { rollDD }
export { rollType }