import fs from 'fs'

const input = fs.readFileSync('./day-4/input.txt').toString().split('\n')

class BingoGame {
    constructor(board) {
        this.board = board
        this.matches = []
        this.isWinner = false
        this.lastPlayed = null
    }

    get matchCount() {
        return this.matches.length
    }

    get score() {
        if (!this.isWinner) {
            return 0
        }

        let unmatchedSum = this.board
            .flat()
            .filter((n) => !this.matches.includes(n))
            .reduce((a, b) => a + b, 0)

        return unmatchedSum * this.lastPlayed
    }

    get rows() {
        return this.board
    }

    get columns() {
        let cols = []

        for (let i = 0; i < 5; i++) {
            const col = []
            for (const row of this.board) {
                col.push(row[i])
            }
            cols.push(col)
        }

        return cols
    }

    checkForBingo() {
        if (this.matchCount < 5) {
            return false
        }

        for (const column of this.columns) {
            if (column.every((number) => this.matches.includes(number))) {
                return true
            }
        }

        for (const row of this.rows) {
            if (row.every((number) => this.matches.includes(number))) {
                return true
            }
        }

        return false
    }

    playNumber(number) {
        this.lastPlayed = number
        this.matches = [
            ...this.matches,
            ...this.board.flat().filter((n) => n === number),
        ]
        this.isWinner = this.checkForBingo()
    }
}

const numbers = input[0].split(',').map(Number)

let group = []
const boards = input
    .slice(1)
    .filter((row) => row.length > 1)
    .reduce((prev, next, i) => {
        const row = next.split(/\s+/).map(Number)
        group.push(row)
        if (group.length == 5) {
            prev.push(group)
            group = []
        }
        return prev
    }, [])

const getWinningScore = (numbers, boards) => {
    let winner = null
    const games = boards.map((board) => new BingoGame(board))

    for (const number of numbers) {
        if (winner) {
            break
        }

        for (const game of games) {
            game.playNumber(number)
            if (game.isWinner) {
                winner = game
                break
            }
        }
    }

    if (!winner) {
        throw new Error('nobody wins')
    }

    return winner.score
}

console.log(getWinningScore(numbers, boards))
