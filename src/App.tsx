import { useState } from 'react';
import './App.css';


type onClick =
  () => void;
type num = number;


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  const [count, setCount] = useState<num>(999);
  const handleClick:onClick = () => {
    setCount((prevCount: num) => prevCount + 1);
  };
  return <span className="likeButton" onClick={handleClick}>&hearts; {count}</span>;
}

export default App;
