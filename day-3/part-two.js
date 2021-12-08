import fs from 'fs'

const diagnosticReport = fs
    .readFileSync('./day-3/input.txt')
    .toString()
    .trim()
    .split('\n')

const getMostCommon = (report, coloumn) => {
    let zeros = 0
    let ones = 0

    for (let row of report) {
        if (row[coloumn] === '0') {
            zeros++
        } else {
            ones++
        }
    }

    if (ones > zeros || ones == zeros) {
        return 1
    }

    return 0
}

const getRating = (report, type) => {
    let filteredReport = report

    for (let i = 0; filteredReport.length > 1; i++) {
        const mostCommon = getMostCommon(filteredReport, i)

        if (type === 'oxygen') {
            filteredReport = filteredReport.filter(
                (row) => Number(row[i]) === mostCommon
            )
        } else {
            filteredReport = filteredReport.filter(
                (row) => Number(row[i]) !== mostCommon
            )
        }
    }

    return filteredReport
}

const oxygenRatingAsDecimal = parseInt(getRating(diagnosticReport, 'oxygen'), 2)
const co2RatingAsDecimal = parseInt(getRating(diagnosticReport, 'co2'), 2)

console.log(oxygenRatingAsDecimal * co2RatingAsDecimal)
