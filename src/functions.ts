/**
 * Definition of functions
 * All the exported functions will be sent to the compiler, 
 * therefore it is possible to call any function defined here from the templates
 */
import {
  to_sequelize,
  to_waterline,
  is_required,
  tag
} from "./utils"

export const functions = {
  to_sequelize,
  to_waterline,
  is_required,
  tag
}