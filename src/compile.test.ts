import { compile } from "./compile";

console.log(compile('./test.view.microdsl', {
  TABLENAME: 'Persona',
  TABLES: ['Item 1']
}))