const App = ({ person, age, gender, member }) => {
    return (
        <>
            <p>{person}</p>
            <p>{age}</p>
            <p>{gender}</p>
            <p>
                <span>{member ? '会員' : '非会員'}</span>
            </p>

            <hr></hr>
        </>
    );
};

export default App;
