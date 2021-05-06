import logo from "../logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { incrementCookiesCount, incrementTotal } from "../actions/index";

export default function CookieBtn() {
  const dispatch = useDispatch();
  const cookies = useSelector((state) => state.cookies);
  const total = useSelector((state) => state.total);

  const handleClick = () => {
    dispatch(incrementCookiesCount());
    dispatch(incrementTotal());
  };
  sessionStorage.setItem("cookies", cookies);
  sessionStorage.setItem("total", total);

  return (
    <>
      <div className="App-button preventHighlights" onClick={handleClick}>
        <img src={logo} className="App-logo preventHighlights" alt="cookie" />
      </div>
    </>
  );
}
