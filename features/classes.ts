class Vehicle {
  drive(): void {
    console.log('Chugga chugga')
  }

  honk():void {
      console.log('beep')
  }
}

class Car extends Vehicle {
    drive(): void {
        console.log('vroom')
    }
}

const car = new Car()
car.drive()
car.honk()

