import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { initialState } from "./contexts/initialState";
import reducer from "./contexts/reducer";
import { StateProvider } from "./contexts/StateProvider";
import './index.css';


const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <StateProvider initialState={initialState} reducer={reducer}>
                <App/>
            </StateProvider>
        </Router>
    </React.StrictMode>
)