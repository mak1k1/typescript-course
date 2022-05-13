import { User } from './models/User'

const user = new User({name: 'modemo', age: 24})

console.log(user.get('name'))

user.set({name: 'makiki'})

console.log(user.get('name'))
console.log(user.get('age'))

user.on('lmao', () => {
    console.log('it wrks')
})


user.on('lmao', () => {
    console.log('it wrks agen')
})

user.on('rofl', () => {
    console.log('it doesn wrk')
})

console.log(user)

user.trigger('lmao')