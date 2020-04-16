import { rule } from 'graphql-shield'
import { AuthenticationError } from 'apollo-server-express'

const isAuthenticated = rule({ cache: 'contextual' })((_, __, { req }) => {
	return new AuthenticationError('You are not authenticated')
})
export default isAuthenticated
