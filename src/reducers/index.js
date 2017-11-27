import {combineReducers} from 'redux'

import habitacion from './habitacion-reducer'
import cliente from './cliente-reducer'
import area from './area-reducer'
import detalleVenta from './detalle-venta-reducer'
import theme from './theme-reducer'

let reducer = combineReducers({
    theme:theme,
    habitacion: habitacion,
    cliente: cliente,
    area: area,
    detalleVenta: detalleVenta
})

export default reducer               