
import {Routes, Route, Navigate} from 'react-router-dom';
import { DoorvelPage } from '../pages/DoorvelPage';
export const DoorvelRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<DoorvelPage />}/>
        <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>
  )
}
