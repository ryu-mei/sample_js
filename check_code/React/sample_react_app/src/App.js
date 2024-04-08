import { useState } from 'react';
let nextId = 0;
const App = () => {
    const [values, setValues] = useState('');
    const [tasks, setTasks] = useState([]);

    const changeHandler = (e) => {
        setValues(e.target.value);
    };
    const clickHandler = () => {
        if (values !== '') {
            setTasks([...tasks, { id: nextId++, name: values }]);
        }
        setValues('');
    };
    return (
        <>
            <input value={values} onChange={changeHandler} />
            <button onClick={clickHandler}>ボタン</button>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            {task.name}
                            <button
                                onClick={() => {
                                    setTasks(
                                        tasks.filter((dtask) => {
                                            return dtask.id !== task.id;
                                        })
                                    );
                                }}
                            >
                                完了
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default App;
