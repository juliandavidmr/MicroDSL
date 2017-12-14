import { convertTypeSequelize, convertTypeWaterline, is_required } from "./utils"

export const functions = {
  to_sequelize: (type: any) => convertTypeSequelize(type),
  to_waterline: (type: any) => convertTypeWaterline(type),
  is_required
}