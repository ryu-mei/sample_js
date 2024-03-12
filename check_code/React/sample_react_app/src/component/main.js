export default function Main() {
    const clickHandler = () => {
      console.log('クリックされました。');
    }
    return (
      <>
        <h1>hello</h1>
        <p>hello world</p>
        <button onClick={clickHandler}>クリック</button>
      </>
    )
}