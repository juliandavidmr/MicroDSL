import compile from './compile'
import db from './db'
import { IDb } from './interfaces';

export default async function (config: IDb, template: string, data?: any) {
  let schema: any = await db(config)

  let res = []
  for (const key in schema) {
    if (schema.hasOwnProperty(key)) {
      const element = schema[key];
      // console.log(element)
      res.push(compile(template, {
        TABLENAME: element.name,
        COLUMNS: element.columns,
        data
      }))
    }
  }
  return res
}