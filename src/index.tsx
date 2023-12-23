import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './Homepage';
import TopicPage from './TopicPage';
import reportWebVitals from './reportWebVitals';
import SubjectPage from "./SubjectPage";
import CreatePage from './CreatePage';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}>
                </Route>
                <Route path="/topic/:topic_id" element={<TopicPage/>}>
                </Route>
                <Route path="/subject/:subject_id" element={<SubjectPage/>}>
                </Route>
                <Route path="/create" element={<CreatePage/>}>
                </Route>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
