import { User } from './models/User'

const user = new User({id: 1, name: 'Cortinslav', age: 25})
user.on('save', () => {
	console.log(user)
})

user.save()