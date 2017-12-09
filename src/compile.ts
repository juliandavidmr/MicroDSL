import { readFileSync } from "fs";
import { toJSVariables, toJS } from "./utils";

const re = /<%([^%>]+)?%>/g,
  reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g

export function compile(tpl: string, data: any) {
  tpl = readFileSync(tpl, 'utf8')

  var code = getCodeBase(data),
    cursor = 0, match;

  var add = function (line: string, js?: any) {
    js ? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
      (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
    return add;
  }

  while (match = re.exec(tpl)) {
    // tpl = tpl.replace(match[0], data[match[1]])
    add(tpl.slice(cursor, match.index))(match[1], true);
    cursor = match.index + match[0].length;
  }
  add(tpl.substr(cursor, tpl.length - cursor));
  code += 'return r.join("");';
  console.log(code)
  return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
}

function getCodeBase(data: any) {  
  return `${toJSVariables()}
    ${toJS(data)}
    var r=[];`
}