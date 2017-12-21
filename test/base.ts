import * as microdsl from "../"

const config = {
	user: 'root',
	password: '',
	host: 'localhost',
	database: 'eter'
}

export default function (template: string) {
	return microdsl(config, template)
}