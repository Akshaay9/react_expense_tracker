import {ADD_TRANSACTION} from "../action/types"
import {REMOVE_TRANSACTION} from "../action/types"
const initialState = {
    transactions:[]
}
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions:[payload,...state.transactions]
            }
            case REMOVE_TRANSACTION:
            return {
                ...state,
                transactions:state.transactions.filter((ele)=>ele.id!==payload)
            }
        default:
            return state
    }
    
}