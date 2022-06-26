import { useState } from "react"
import { ParentContext } from "./ParentContext"


export const ParentProvider = ({children}) => {

    const [parents, setParents] = useState()

    return (
        <ParentContext.Provider value={{parents}}>
            {children}
        </ParentContext.Provider>
    )
}