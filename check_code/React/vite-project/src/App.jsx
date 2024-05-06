const people = [
  { id: 0, name: 'Murakami', position: 'third baseman' },
  { id: 1, name: 'Ohtani', position: 'pitcher' },
  { id: 2, name: 'Nootbaar', position: 'outfielder' },
  { id: 3, name: 'Yoshida', position: 'outfielder' },
  { id: 4, name: 'Imanaga', position: 'pitcher' },
];

const List = () => {
  const fielder = people.filter((person) => person.position === 'pitcher');
  const pitcher = fielder.map((person) => <li>{person.name}</li>);
  return <ul>{pitcher}</ul>;
};

export default List;
