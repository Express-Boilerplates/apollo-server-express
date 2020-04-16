import { app, server } from './server'
import { say } from 'cowsay'

/**
 * Make sure we are running node 7.6+
 */
const [major, minor] = process.versions.node.split('.').map(parseFloat)
if (major < 7 || (major === 7 && minor <= 5)) {
	console.log(
		"🛑 🌮 🐶 💪 💩\nHey You! \n\t ya you! \n\t\tBuster! \n\tYou're on an older version of node that doesn't support the latest and greatest things we are learning (Async + Await)! Please go to nodejs.org and download version 7.6 or greater. 👌\n "
	)
	process.exit()
}

/**
 *  READY?! Let's go! 👌
 */
// Start our app!
let port = process.env.PORT || 4000
let appUrl = process.env.APP_URL || `http://localhost:${port}`
app.listen({ port }, () => {
	console.log(say({ text: `server working on ${appUrl}${server.graphqlPath}` }))
})
