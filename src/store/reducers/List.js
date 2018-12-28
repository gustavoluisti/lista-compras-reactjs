import { Types } from '../actions/List'

const initialState = {
    list: null,
    items: []
}

export default function list(state=initialState, action ) {
    switch(action.type) {
        case Types.ADD_PRODUCT:
            return { list:action.list, items: [...state.action, action.product]}
        default:
            return state
    }
}