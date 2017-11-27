import {combineReducers} from 'redux'

import habitacion from './habitacion-reducer'
import cliente from './cliente-reducer'
import detalleVenta from './detalle-venta-reducer'
import theme from './theme-reducer'

let reducer = combineReducers({
    theme:theme,
    habitacion: habitacion,
    cliente: cliente,
    detalleVenta: detalleVenta
})

export default reducer               