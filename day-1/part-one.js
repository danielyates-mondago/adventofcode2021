import fs from 'fs'

const depthMeasurements = fs
    .readFileSync('./day-1/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number)

const countMeasurementChanges = (depthMeasurements) => {
    return depthMeasurements.filter(
        (measurement, i) => measurement > depthMeasurements[i - 1]
    ).length
}

console.log(countMeasurementChanges(depthMeasurements))
