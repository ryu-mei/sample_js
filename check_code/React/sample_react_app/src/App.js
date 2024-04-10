import { useState } from 'react';

const App = () => {
    const personObj = { name: 'otani', position: 'pitchar' };
    const [person, setPerson] = useState(personObj);
    const changeName = (e) => {
        setPerson({ ...person, name: e.target.value });
    };
    const changePosition = (e) => {
        setPerson({ ...person, position: e.target.value });
    };
    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.position}</h3>

            <label>名前</label>
            <input type="text" onChange={changeName} />
            <label>ポジション</label>
            <input type="text" onChange={changePosition} />
        </>
    );
};

export default App;
