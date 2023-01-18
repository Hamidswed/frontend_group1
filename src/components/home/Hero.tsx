import { Button } from "@mui/material";
import Background from "../../assets/hero.jpg";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export default function Hero() {
  const CheckOutBTN = styled(Button)({
    color: "#fff",
    borderColor: "#fff",
    "&:hover": {
      borderColor: "#f72585",
      backgroundColor:"#f72585"
    },
  });
  return (
    <div className="home-hero">
      <img
        src={Background}
        alt="Backgroudimgages"
        className="backgroundImage"
      />
      <h1>Bye <em>More</em><br/> <em>&</em><br/> Be <em>Happy</em></h1>
      <Link to="/products">
        <CheckOutBTN variant="outlined" size="large">
          Check out new collection!
        </CheckOutBTN>
      </Link>
    </div>
  );
}
