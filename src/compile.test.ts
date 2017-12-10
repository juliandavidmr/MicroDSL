import microdsl from "./"
import { IDb } from "./interfaces";
import { compile } from "ejs";


// Mysql connect config.
var config: IDb = {
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'projectvisibilidad'
}

async function test() {
  let compiled = await microdsl(config, './test.view.microdsl', {
    TABLES: ['Item 1']
  })  
  console.log(compiled)
}


test()