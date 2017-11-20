import {combineReducers} from 'redux'

import habitacion from './habitacion-reducer'
import theme from './theme-reducer'

let reducer = combineReducers({
    theme:theme,
    habitacion: habitacion,
    
})

export default reducer               