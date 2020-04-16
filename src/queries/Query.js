const Query = {
	appName(parent, args) {
		return 'Apollo server express'
	},
	helloWithAuth(parent, args) {
		return 'A very secret msg'
	}
}

export default Query
