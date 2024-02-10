import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './component/main'
import Header from './component/header';
import Footer from './component/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
            <Main />
        <Footer />
    </>

);