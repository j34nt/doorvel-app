import { Routes, Route } from "react-router-dom";
import { DoorvelRoutes } from "../doorvel/routes/DoorvelRoutes";


export const AppRouter = () => {
    return(
        <Routes>
            <Route path="/*" element={<DoorvelRoutes />}/>
        </Routes>
    )
}