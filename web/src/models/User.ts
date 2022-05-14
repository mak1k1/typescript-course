import { AxiosResponse } from 'axios'
import { Attributes } from './Attributes'
import { Eventing } from './Eventing'
import { Model } from './Model'
import { Sync } from './Sync'

export interface UserProps {
  id?: number
  name?: string
  age?: number
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps>{
	static buildUser(attrs: UserProps): User {
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new Sync<UserProps>(rootUrl)
		)
	}
}
