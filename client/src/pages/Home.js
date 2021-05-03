import { useEffect } from "react";
import CookieBtn from "../components/CookieBtn";
import Counter from "../components/Counter";
import NewGameBtn from "../components/NewGameBtn";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const level = useSelector((state) => state.level);
  const cookies = useSelector((state) => state.cookies);
  const breakpoint = useSelector((state) => state.breakpoint);

  const handleLevel = (value) => {
    if (value === breakpoint) {
      dispatch({
        type: "INCREMENTLEVEL",
      });
      dispatch({
        type: "INCREMENTBREAKPOINT",
      });
    }
  };

  useEffect(() => {
    handleLevel(cookies);
  }, [cookies]);

  return (
    <>
      <header className="App-header">
        <div className="App-title">
          <p>Cookie Clicker</p>
          <span style={{ fontSize: "1.3rem" }}>Level {level}</span>
        </div>
        <CookieBtn />
        <Counter />
        <NewGameBtn />
      </header>
    </>
  );
}
