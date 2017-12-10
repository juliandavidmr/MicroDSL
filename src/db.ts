import { IDb } from "./interfaces"
var mysqldesc = require('mysqldesc')

export default function getSchema(config: IDb) {
  return new Promise((resolve, reject) => {
    mysqldesc(config, function (err: any, schema: any) {
      if (err) {
        // throw err
        return reject(err)
      } else {
        // console.log("schema=", JSON.stringify(schema, null, 4))
        return resolve(schema)
      }
    })
  })
}