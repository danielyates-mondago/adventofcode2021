import fs from 'fs'

const depthMeasurements = fs
    .readFileSync('./day-one/input.txt')
    .toString()
    .split('\n')
    .map(Number)

const countMeasurementChanges = (depthMeasurements) => {
    return depthMeasurements.filter(
        (measurement, i) => measurement > depthMeasurements[i - 1]
    ).length
}

console.log(countMeasurementChanges(depthMeasurements))
