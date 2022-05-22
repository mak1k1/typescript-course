@classDecorator
class Boat {
	color: string = 'red'
	
	@testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`
  }

  @logError('Oops, boat was sunk in ocean')
  pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
    if(speed === 'fast') {
			console.log('swish')
		}
		else {
			console.log('nothing')
			throw new Error()
		}
  }
}

function classDecorator(constructor: typeof Boat) {
	console.log(constructor)
}

function parameterDecorator(target: Boat, key: string, index: number): void {
	console.log(key, index)
}

function testDecorator(target: any, key: string ): void {
	console.log(key)
}


function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value

    desc.value = function () {
      try {
        method()
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }
}

new Boat().pilot('fast', true)
