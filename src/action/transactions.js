import {ADD_TRANSACTION} from "./types"
import { REMOVE_TRANSACTION } from "./types"

export const addTransaction = (form) => async(dispatch) => {
    dispatch({
        type: ADD_TRANSACTION,
        payload:form
    })
}
export const removeTransaction = (id) => async(dispatch) => {
    dispatch({
        type: REMOVE_TRANSACTION,
        payload:id
    })
}