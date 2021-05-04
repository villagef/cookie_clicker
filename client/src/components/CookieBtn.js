import logo from "../logo.svg";
import { useDispatch, useSelector } from "react-redux";

export default function CookieBtn() {
  const dispatch = useDispatch();
  const cookies = useSelector((state) => state.cookies);
  const total = useSelector((state) => state.total);

  const handleClick = () => {
    dispatch({
      type: "INCREMENTCOOKIES",
    });
    dispatch({
      type: "INCREMENTTOTAL",
    });
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
