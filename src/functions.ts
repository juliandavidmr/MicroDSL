/**
 * Definition of functions
 * All the exported functions will be sent to the compiler, 
 * therefore it is possible to call any function defined here from the templates
 */
import {
  convertTypeSequelize,
  convertTypeWaterline,
  is_required,
  tag
} from "./utils"

export const functions = {
  to_sequelize: (type: any) => convertTypeSequelize(type),
  to_waterline: (type: any) => convertTypeWaterline(type),
  is_required,
  tag
}