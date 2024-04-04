import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App person="石井" age="18" gender="男" member={true} />
        <App person="鈴木" age="20" gender="男" member={false} />
        <App person="高橋" age="24" gender="男" member={true} />
    </>
);
