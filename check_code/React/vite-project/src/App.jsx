const people = [
  { id: 0, name: 'Murakami', position: 'third baseman' },
  { id: 1, name: 'Ohtani', positon: 'pitcher' },
  { id: 2, name: 'Nootbaar', positon: 'outfielder' },
  { id: 3, name: 'Yoshida', positon: 'outfielder' },
  { id: 4, name: 'Imanaga', positon: 'pitcher' },
];

const List = () => {
  const fielder = people.filter((person) => (
    <li>{person.position === 'pitcher'}</li>
  ));
  return <ul>{fielder}</ul>;
};

export default List;
