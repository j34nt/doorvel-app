import { useReducer } from "react"
import { types } from "../../types/types";
import { ParentContext } from "./ParentContext";
import { parentReducer } from "./ParentReducer"


const ParentState = props => {
    const initialState = {
        parents:[],
        parentSelected:null,
        loaded:false
    }
    const [state, dispatch] = useReducer(parentReducer, initialState);

    const getDataParents = async () => {
        try {
            const resp = await fetch('http://54.177.198.128:8001/api/cat-amenities-parents/');
            const data = await resp.json(); 
            // console.log(data)
            dispatch({
                type:types.parents,
                payload:data.data
            })
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const getParentById = () => {

    }

    const addNewParent = () => {
        try {
            const newParent = {
                id:(state.parents.length + 1),
                name:'New Parent',
                seo_friendly:'Desc',
                created_at:new Date().toISOString(),
                created_by:'Custom'
            }
            const newParents = [
                ...state.parents,
                newParent
            ]
            dispatch({
                type:types.parents,
                payload:newParents
            })
        } catch (error) {
            
        }
    }

    const updateParent = (parent, idx) => {
        try {
            let newParents = [...state.parents];
            newParents[idx] = {
                ...newParents[idx],
                ...parent
            }
            dispatch({
                type: types.parents,
                payload: newParents
            })

        } catch (error) {
            
        }
    }

    const selectParent = (parent) => {
        try {
            dispatch({
                type:types.parentSelect,
                payload:parent
            });
            
        } catch (error) {
            
        }

    }

    return (
        <ParentContext.Provider value={{
            parents:state.parents,
            parentSelected:state.parentSelected,
            loaded: state.loaded,
            getDataParents,
            getParentById,
            selectParent,
            updateParent,
            addNewParent
        }}>
            {props.children}
        </ParentContext.Provider>
    )
}

export default ParentState