import getVariables from './variables';
export function toJSVariables() {
  return toJS(getVariables())
}

export function toJS(obj: any) {
  let code = 'var '
  for (const key in obj) {
    let element: string = obj[key]
    switch (typeof element) {
      case 'number':
        code += `${key}=${element},`
        break;
      case 'string':
        code += `${key}="${element}",`
        break;
      case 'object':
        if (Array.isArray(element)) {
          code += `${key}=${getElementsArrayJS(element)},`
        }
      default:
        break;
    }
  }
  return code.substr(0, code.length - 1) + `;`
}

function getElementsArrayJS(items: Array<any>) {
  let c = '['
  items.forEach(element => {
    if (typeof element === 'boolean' || typeof element === 'number') {
      c += `${element},`
    } else if (typeof element === 'string') {
      c += `"${element}",`
    }
  })
  return c.substr(0, c.length - 1) + `]`;
}