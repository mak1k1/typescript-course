const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro'],
]

// Help with inference when extracting values
const myCar = carMakers[0]
const mySecondCar = carMakers.pop()

//Prevent incompatible values

carMakers.push('ferrari')

//Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase()
})

//Flexible types
const importantDates: (string | Date)[] = [new Date()]
importantDates.push('2030-10-10')
importantDates.push(new Date())