import fs from 'fs'

const depthMeasurements = fs
    .readFileSync('./day-one/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number)

const countMeasurementChanges = (depthMeasurements) => {
    let increasedMeasurementCount = 0
    let sliderSum =
        depthMeasurements[0] + depthMeasurements[1] + depthMeasurements[2]

    for (let i = 2; depthMeasurements.slice(i).length > 2; i++) {
        const currentSum =
            depthMeasurements[i] +
            depthMeasurements[i + 1] +
            depthMeasurements[i + 2]
        if (currentSum > sliderSum) {
            increasedMeasurementCount++
        }
        sliderSum = currentSum
    }

    return increasedMeasurementCount
}

console.log(countMeasurementChanges(depthMeasurements))
