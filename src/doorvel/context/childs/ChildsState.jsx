import { useReducer } from "react";
import { types } from "../../types/types";
import { ChildsContext } from "./ChildsContext";
import { ChildsReducer } from "./ChildsReducer";


const ChildsState = props => {
    const initialState = {
        childs:[],
        childsByParent:[],
        loaded:false
    }

    const [state, dispatch] = useReducer(ChildsReducer, initialState);

    const getDataChilds = async () => {
        try {
            const resp = await fetch('http://54.177.198.128:8001/api/cat-amenities-childs/');
            const data = await resp.json();
            dispatch({
                type:types.childsData,
                payload:data.results
            })

        } catch (error) {
            console.log(error);
        }
    }

    const getChildsByParentId = async (idParent) => {

        try {
            const childsByParent = state.childs.filter(item => item.amenity_parent == idParent)
            // const resp = await fetch(`http://54.177.198.128:8001/api/cat-amenities-childs?amenity_parent=${idParent}`);
            // const data = await resp.json();
            // console.log(data);
            dispatch({
                type:types.childsByParent,
                payload: childsByParent
                // payload: data.results
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ChildsContext.Provider value={{
            childs:state.childs,
            childsByParent:state.childsByParent,
            loaded: state.loaded,
            getDataChilds,
            getChildsByParentId
        }}>
            {props.children}
        </ChildsContext.Provider>
    )
}

export default ChildsState