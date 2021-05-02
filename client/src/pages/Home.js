import { useState, useEffect } from "react";
import CookieBtn from "../components/CookieBtn";
import Counter from "../components/Counter";
import NewGameBtn from '../components/NewGameBtn';
import { useSelector } from 'react-redux';

export default function Home() {
  let [counter, setCounter] = useState(0);
  const level = useSelector(state => state.level);

  return (
    <>
      <header className="App-header">
        <div className="App-title">
          <p>Cookie Clicker</p>
          <span style={{fontSize: '1.3rem'}}>Level {level}</span>
        </div>
        <CookieBtn />
        <Counter />
        <NewGameBtn />
      </header>
    </>
  );
}
