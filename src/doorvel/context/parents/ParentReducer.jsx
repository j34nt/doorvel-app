import { types } from "../../types/types";


export const parentReducer = (state = {}, action) => {
    switch (action.type) {
        case types.parents:
            return {
                ...state,
                parents:action.payload,
                loaded:true
            }
        case types.parentSelect:
            return {
                ...state,
                parentSelected: action.payload
            }
    
        default:
            return state;
    }
}