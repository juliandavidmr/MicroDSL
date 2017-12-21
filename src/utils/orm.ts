const r_varchar = /VARCHAR+\(?([0-9]*)\)?/
const r_varcharbin = /VARCHAR BINARY/
const r_text = /TEXT/
const r_bigint = /BIGINT+\(?([0-9]*)\)?/
const r_tinyint = /TINYINT+\(?([0-9])\)?/
const r_charbin = /CHAR\s*\(([0-9]*)\)\s*BINARY/

/**
 * Convert a mysql data type to sequelize
 * @param typeAttrMysql 
 */
export function convertTypeSequelize(typeAttrMysql: any): string {
  if (typeof typeAttrMysql === 'object') {
    return convertTypeSequelize(typeAttrMysql['Type'])
  }
  typeAttrMysql = typeAttrMysql ? typeAttrMysql.toUpperCase().trim() : ''
  if (r_varchar.test(typeAttrMysql)) {
    let match: any = r_varchar.exec(typeAttrMysql)
    return `STRING${match[1] ? `(${match[1]})` : ''}`
  } else if (r_varcharbin.test(typeAttrMysql)) {
    return 'STRING.BINARY'
  } else if (r_text.test(typeAttrMysql)) {
    return typeAttrMysql.indexOf('TINYTEXT') !== -1 ? `TEXT("tiny")` : 'TEXT'
  } else if (typeAttrMysql.indexOf('INTEGER')) {
    return `INTEGER`
  } else if (typeAttrMysql.indexOf('BIGINT')) {
    let match: any = r_bigint.exec(typeAttrMysql)
    return `BIGINT${match[1] ? `(${match[1]})` : ''}`
  } else if (typeAttrMysql.indexOf('DATE WITHOUT TIME')) {
    return `DATEONLY`
  } else if (typeAttrMysql.indexOf('FLOAT')
    || typeAttrMysql.indexOf('DOUBLE')
    || typeAttrMysql.indexOf('DECIMAL')
    || typeAttrMysql.indexOf('ENUM')
    || typeAttrMysql.indexOf('DATE')) { // include FLOAT(11,12) and FLOAT(11) and DOUBLE
    return typeAttrMysql
  } else if (r_tinyint.test(typeAttrMysql)) {
    return `BOOLEAN`
  } else if (r_charbin.test(typeAttrMysql)) {
    return `UUID`
  } else {
    return 'STRING'
  }
}

/**
 * Convert a mysql data type to waterline
 * @param typeAttrMysql 
 */
export function convertTypeWaterline(typeAttrMysql: any): string {
  if (typeof typeAttrMysql === 'object') {
    return convertTypeWaterline(typeAttrMysql['Type'])
  }
  typeAttrMysql = typeAttrMysql ? typeAttrMysql.toUpperCase().trim() : ''
  if (r_varchar.test(typeAttrMysql) || r_varcharbin.test(typeAttrMysql)) {
    return `string`
  } else if (r_text.test(typeAttrMysql)) {
    return 'text'
  } else if (typeAttrMysql.indexOf('INTEGER') || typeAttrMysql.indexOf('BIGINT')) {
    return `integer`
  } else if (typeAttrMysql.indexOf('FLOAT')
    || typeAttrMysql.indexOf('DOUBLE')
    || typeAttrMysql.indexOf('DECIMAL')) {
    return 'float'
  } else if (typeAttrMysql.indexOf('DATE')) {
    return 'datetime'
  } else if (r_tinyint.test(typeAttrMysql)) {
    return `boolean`
  } else {
    return 'string'
  }
}