import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './component/main'
import Header from './component/header';
import Footer from './component/footer';
import Form from './component/form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
            <Main />
            <Form />
        <Footer />
    </>

);