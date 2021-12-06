import fs from 'fs'

const pilotCommandsInput = fs
    .readFileSync('./day-two/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((item) => {
        const [command, value] = item.split(' ')
        return { command, value: Number(value) }
    })

const performCommands = (pilotCommands) => {
    let depth = 0
    let horizontalPosition = 0

    for (const { command, value } of pilotCommands) {
        switch (command) {
            case 'forward':
                horizontalPosition += value
                break
            case 'down':
                depth += value
                break
            case 'up':
                depth -= value
                break
        }
    }

    return { depth, horizontalPosition }
}

const result = performCommands(pilotCommandsInput)
console.log(result.horizontalPosition * result.depth)
