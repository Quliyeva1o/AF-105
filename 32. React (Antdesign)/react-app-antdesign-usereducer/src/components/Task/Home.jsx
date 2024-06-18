import { Typography } from "antd";
import poster from "../../../public/officeposter.webp";

const Home = () => {
  return (
    <div>
      <Typography style={{ textAlign: "center" }}>
        Home Page
      </Typography>
      <div style={{ margin:'0 auto',width:'60%',height:'400px'}}>
        <img style={{objectFit:'cover',width:'100%',height:'100%'}} src={poster} alt="office poster" />
      </div>
    </div>
  );
};

export default Home;
