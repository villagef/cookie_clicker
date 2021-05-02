import {useState, useEffect} from 'react';
import CookieBtn from "../components/CookieBtn";
import Counter from '../components/Counter';


export default function Home() {
    let [counter, setCounter] = useState(0);
    
    const handleClick = () => {
        counter++;
        setCounter(counter)
    }
  return (
    <>
      <header className="App-header">
        <CookieBtn handleClick={handleClick}/>
        <Counter counter={counter}/>
      </header>
    </>
  );
}
