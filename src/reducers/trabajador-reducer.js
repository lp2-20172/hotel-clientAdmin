import {
    TRABAJADOR_LIST,
    TRABAJADOR_LIST_FAILURE,
    TRABAJADOR_ADD, TRABAJADOR_UPDATE,
    TRABAJADOR_DELETE
} from '../actions/trabajador-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const trabajadorReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRABAJADOR_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case TRABAJADOR_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case TRABAJADOR_ADD:
            return {
                ...state,
            }
        case TRABAJADOR_UPDATE:
            return {
                ...state,
            }
        case TRABAJADOR_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default trabajadorReducer