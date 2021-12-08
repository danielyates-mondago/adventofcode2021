import fs from 'fs'

const diagnosticReportInput = fs
    .readFileSync('./day-3/input.txt')
    .toString()
    .trim()
    .split('\n')

const getRatesFromReport = (diagnosticReport) => {
    const numberOfColumns = diagnosticReport[0].length
    let gammaRate = ''
    let epsilonRate = ''

    for (let coloumn = 0; coloumn < numberOfColumns; coloumn++) {
        let zeros = 0
        let ones = 0

        for (let row of diagnosticReport) {
            if (row[coloumn] === '0') {
                zeros++
            } else {
                ones++
            }
        }

        if (ones > zeros) {
            gammaRate += '1'
            epsilonRate += '0'
        } else {
            gammaRate += '0'
            epsilonRate += '1'
        }
    }

    return { gammaRate, epsilonRate }
}

const { gammaRate, epsilonRate } = getRatesFromReport(diagnosticReportInput)
const gammaRateAsDecimal = parseInt(gammaRate, 2)
const epsilonRateAsDecimal = parseInt(epsilonRate, 2)

console.log(gammaRateAsDecimal * epsilonRateAsDecimal)
