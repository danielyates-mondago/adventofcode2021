import fs from 'fs'

const pilotCommandsInput = fs
    .readFileSync('./day-2/input.txt')
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
    let aim = 0

    for (const { command, value } of pilotCommands) {
        switch (command) {
            case 'forward':
                horizontalPosition += value
                depth = depth + aim * value
                break
            case 'down':
                aim += value
                break
            case 'up':
                aim -= value
                break
        }
    }

    return { depth, horizontalPosition }
}

const result = performCommands(pilotCommandsInput)
console.log(result.horizontalPosition * result.depth)
