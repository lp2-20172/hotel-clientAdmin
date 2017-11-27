import {combineReducers} from 'redux'

import habitacion from './habitacion-reducer'
import cliente from './cliente-reducer'
import theme from './theme-reducer'

let reducer = combineReducers({
    theme:theme,
    habitacion: habitacion,
    cliente: cliente,
})

export default reducer               