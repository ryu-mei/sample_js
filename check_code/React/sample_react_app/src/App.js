import { useState } from 'react';

const App = () => {
    const [text, setText] = useState({ name: '', message: '' });
    const [status, setStatus] = useState('typing');

    const inputChange = (e) => {
        setText({ ...text, name: e.target.value });
    };
    const textareaChange = (e) => {
        setText({ ...text, message: e.target.value });
    };
    const sendMessage = (text) => {
        return new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');
        await sendMessage(text);
        setStatus('sent');
    }

    const isSending = status === 'sending';
    const isSent = status === 'sent';

    if (isSent) {
        return (
            <>
                <p>{text.message}</p>
                <img
                    src="./images/baseball-7985432_640.jpg"
                    alt="baseball"
                ></img>
                <h1>{text.name}さん応援ありがとうございます！</h1>
            </>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>大谷翔平選手に応援メッセージをお願いします！</p>
            <label>お名前</label>
            <input
                disabled={isSending}
                value={text.name}
                onChange={inputChange}
            />
            <br />
            <textarea
                disabled={isSending}
                value={text.message}
                onChange={textareaChange}
                placeholder={'メッセージを入力してください'}
            />
            <br />
            <button disabled={isSending} type="submit">
                メッセージを送る
            </button>
            {isSending && <p>Sending...</p>}
        </form>
    );
};

export default App;
