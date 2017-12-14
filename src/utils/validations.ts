export function is_required(value: any): boolean {
  if (typeof value === 'string') {
    return value.indexOf('NO') !== -1
  } else if (typeof value === 'object') {
    return is_required(value['Null'])
  }
  return false
}