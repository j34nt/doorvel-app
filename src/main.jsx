import React from 'react';
import ReactDOM from 'react-dom/client';
import {DoorvelApp} from './DoorvelApp';
import { BrowserRouter } from "react-router-dom";
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DoorvelApp />
    </BrowserRouter>
  </React.StrictMode>
)
