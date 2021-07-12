import useCount from './hooks/useCount';
import './App.css';

const App = () => {
  const [count, text, onClickButton] = useCount();

  return (
    <>
      <button onClick={() => onClickButton()}>
        {count} {text}
      </button>
    </>
  );
};

export default App;
