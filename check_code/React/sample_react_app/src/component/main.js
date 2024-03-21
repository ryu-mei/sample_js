function Cup( {guest} ) {
  return <p>ゲストは{guest}</p>
}

export default function Main() {
    let cups = [];
    for(let i = 1; i <= 12; i++) {
      cups.push(<Cup key={i} guest={i} />);
    }
    return cups;
}