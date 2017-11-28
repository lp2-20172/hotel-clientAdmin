import {combineReducers} from 'redux'

import habitacion from './habitacion-reducer'
import cliente from './cliente-reducer'
import area from './area-reducer'
import detalleVenta from './detalle-venta-reducer'
import pago from './pago-reducer'
import reserva from './reserva-reducer'
import trabajador from './trabajador-reducer'
import theme from './theme-reducer'

let reducer = combineReducers({
    theme:theme,
    habitacion: habitacion,
    cliente: cliente,
    area: area,
    pago: pago,
    reserva: reserva,
    trabajador: trabajador,
    detalleVenta: detalleVenta
})

export default reducer               