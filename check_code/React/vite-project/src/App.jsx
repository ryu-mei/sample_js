import Copyright from './Copyright.jsx';
import FancyText from './FancyText.jsx';
import InspirationGenerator from './InspirationGenerator.jsx';

const App = () => {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2024} />
      </InspirationGenerator>
    </>
  );
};

export default App;
