import {
    AREA_LIST,
    AREA_LIST_FAILURE,
    AREA_ADD, AREA_UPDATE,
    AREA_DELETE
} from '../actions/area-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const areaReducer = (state = initialState, action) => {
    switch (action.type) {
        case AREA_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case AREA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case AREA_ADD:
            return {
                ...state,
            }
        case AREA_UPDATE:
            return {
                ...state,
            }
        case AREA_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default areaReducer