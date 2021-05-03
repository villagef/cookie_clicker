import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

export default function BuyButton({ bonus }) {
  const cookies = useSelector((state) => state.cookies);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const speed = sessionStorage.getItem("speed");
    sessionStorage.setItem("price", bonus.price);
    if (bonus.price <= cookies) {
      sessionStorage.setItem("speed", [bonus.speed, speed]);
    }
    dispatch({ type: "DECREMENTCOOKIES" });
  };

  return (
    <Button edge="end" aria-label="buy" onClick={handleClick}>
      BUY
    </Button>
  );
}
