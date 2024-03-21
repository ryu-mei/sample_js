function Recipe( {drinkers} ) {
  return <p>個数{drinkers}</p>
}

export default function Main() {
    const clickHandler = () => {
      alert('クリックされました。');
    }
    return (
      <>
        <Recipe drinkers={2}/>
        <Recipe drinkers={3}/>
        <Recipe drinkers={4}/>
        <h1>hello</h1>
        <p>hello world</p>
        <button onClick={clickHandler}>クリック</button>
      </>
    )
}