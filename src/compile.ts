import { readFileSync } from "fs"
import { render } from "ejs"

export default function createSchema(tpl: string, data: any) {
  let content: string = readFileSync(tpl, 'utf8')
  return render(content, data)
}