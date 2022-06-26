import { types } from "../../types/types";


export const ChildsReducer = (state = {}, action) => {
    switch (action.type) {
        case types.childsData:
            return {
                ...state,
                childs:action.payload,
                loaded:true
            }
        case types.childsByParent:
            return {
                ...state,
                childsByParent:action.payload
            }
    
        default:
            return state;
    }
}