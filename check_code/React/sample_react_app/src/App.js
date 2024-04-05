import React from 'react';

const App = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch(() => alert('error'));
    return <></>;
};

export default App;
