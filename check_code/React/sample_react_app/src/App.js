import { useState, useEffect } from 'react';

const App = () => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch(() => alert('error'));
    }, []);
    console.log(data);
    return (
        <>
            {data === undefined ? (
                ''
            ) : (
                <ul>
                    {data.map((d) => {
                        return <li key={d.id}>名前:{d.name}</li>;
                    })}
                </ul>
            )}
        </>
    );
};

export default App;
