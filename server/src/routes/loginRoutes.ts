import { Router, Request, Response } from 'express'
import bodyParser from 'body-parser'

const router = Router()

router.get('/login', (req: Request, res: Response) => {
  res.send(
    `
		<form>
			<div>
				<label>Email</label>
				<input name="email" />
			</div>
			<div>
				<label>Password</label>
				<input name="password" type="password" />
			</div>
			<button>Submit</button>
		</form>
		`
  )
})

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body
  res.send(email + password)
})

export { router }
