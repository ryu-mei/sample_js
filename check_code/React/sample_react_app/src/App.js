import { useState } from 'react';

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        let incorrect = answer !== '岩手県';
        if (incorrect) {
            // new Errorと同じ
            reject(Error('間違いですもう一度入力してください。'));
        } else {
            resolve();
        }
    });
}

const App = () => {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');
    if (status === 'success') {
        return <h1>正解です。</h1>;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }
    return (
        <>
            <h3>野球クイズ</h3>
            <p>大谷翔平選手の出身地は何県でしょう？</p>

            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button
                    disabled={answer.length === 0 || status === 'submitting'}
                >
                    答える
                </button>
                {error !== null && <p className="Error">{error.message}</p>}
            </form>
        </>
    );
};

export default App;
