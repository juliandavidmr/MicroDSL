import base from "./base"
import * as _ from "underscore"
import { expect } from 'chai'
import 'mocha'

describe('Functions', () => {

	it('should render the functions (Sequelize-Waterline)', async () => {
		const result = await base('./examples/functions.ejs')
		for (let i = 0; i < result.length; i++) {
			expect(result[i]).to.equals('string\nSTRING')
		}
	})

	it('should render html tags', async () => {
		const result = await base('./examples/tags.base.ejs')
		for (let i = 0; i < result.length; i++) {
			expect(_.unescape(result[i])).be.contains('<div>Here content</div>')
			expect(_.unescape(result[i])).be.contains('<span class=test>Here content</span>')
		}
	})

})