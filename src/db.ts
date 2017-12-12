import { IDb } from "./interfaces"
var mysqldesc = require('mysqldesc')

export default function getSchema(config: IDb) {
  return new Promise((resolve, reject) => {
    mysqldesc(config, function (err: any, schema: any) {
      if (err) {
        // throw err
        return reject(err)
      } else {
        schema = prepareSchema(schema)
        // console.log("schema=", JSON.stringify(schema, null, 4))
        return resolve(schema)
      }
    })
  })
}

function prepareSchema(schema: any) {
  var r: any = {}
  for (const key in schema) {
    const element = schema[key];
    r[key] = r[key] ? r[key] : {}
    r[key]['columns'] = Object.keys(element.columns).map(it => ({
      ...element.columns[it],
      name: it
    }))
    r[key]['rel'] = element.relations
    r[key]["table"] = key
  }
  var r2 = []
  for (const key in r) {
    r2.push(r[key])
  }
  return r2
}