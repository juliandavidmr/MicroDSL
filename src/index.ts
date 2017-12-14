import compile from './compile'
import db from './db'
import { functions } from './functions'
import { IDb } from './interfaces'

export default async function create(config: IDb, template: string, data?: any) {
  let schema: any = await db(config)

  let res = []
  for (const key in schema) {
    if (schema.hasOwnProperty(key)) {
      const element = schema[key]
      // console.log(element.columns)
      res.push(compile(template,
        Object.assign({}, {
          TABLENAME: element.table,
          COLUMNS: element.columns,
          RELS: element.rel
        },
          data,
          functions
        )
      ))
    }
  }
  return res
}

module.exports = create