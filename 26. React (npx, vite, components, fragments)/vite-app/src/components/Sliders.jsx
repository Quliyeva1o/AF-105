import data from "../data";
import ListGroup from "react-bootstrap/ListGroup";
import 'bootstrap/dist/css/bootstrap.min.css';

function Sliders() {
  // const data = [];
  return (
    <>
      <h3>This is sliders</h3>
      <ListGroup>
        {data.map((slider)=>{
            return <ListGroup.Item key={slider.id}>{slider.name}</ListGroup.Item>
        })}
      </ListGroup>
    </>
  );
}

export default Sliders;
