import { useState, useEffect } from "react";
import CookieBtn from "../components/CookieBtn";
import Counter from "../components/Counter";

export default function Home() {
  let [counter, setCounter] = useState(0);
  let [level, setLevel] = useState(1);

  const handleClick = () => {
    counter++;
    setCounter(counter);
  };

  return (
    <>
      <header className="App-header">
        <div className="App-title">
          <p>Cookie Clicker</p>
          <span style={{fontSize: '1.3rem'}}>Level {level}</span>
        </div>
        <CookieBtn handleClick={handleClick} />
        <Counter counter={counter} level={level} />
      </header>
    </>
  );
}
