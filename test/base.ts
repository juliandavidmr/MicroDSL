// use db_test.sql

import * as microdsl from "../"

const config = {
	user: 'root',
	password: 'root',
	host: 'localhost',
	database: 'webapp'
}

export default function (template: string) {
	return microdsl(config, template)
}