import {
    PAGO_LIST,
    PAGO_LIST_FAILURE,
    PAGO_ADD, PAGO_UPDATE,
    PAGO_DELETE
} from '../actions/pago-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const pagoReducer = (state = initialState, action) => {
    switch (action.type) {
        case PAGO_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case PAGO_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case PAGO_ADD:
            return {
                ...state,
            }
        case PAGO_UPDATE:
            return {
                ...state,
            }
        case PAGO_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default pagoReducer