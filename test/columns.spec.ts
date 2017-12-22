import base from "./base"
import * as _ from "underscore"
import { expect } from 'chai'
import 'mocha'

describe('Columns', () => {

	it('should match the names of the columns in the table', async () => {
		const result = await base('./examples/list_columns.ejs')
		expect(result).to.not.be.null
		expect(result).to.be.a('array')
		expect(result[0]).to.be.a('string')
		expect(result[0]).to.contains('Table: Guests')
		expect(result[0]).to.contains('Columns: 7');

		['id', 'firstname', 'lastname', 'email', 'reference', 'birthday', 'reg_date'].map(it => {
			expect(result[0]).to.contains(`-${it}\n`)
		})
	})

})