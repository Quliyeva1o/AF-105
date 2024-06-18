import { useState, useRef } from "react";
import Welcome from "./components/Welcome";
import Logout from "./components/Logout";
import Product from "./components/Product";
import Login from "./components/Login";
import styled from "styled-components";
import { styles } from "./styles";

import "./App.css";
import CustomInput from "./components/CustomInput";

const Button = styled.button`
  display: inline-block;
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  display: block;
`;
const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: #bf4f74;
  font-weight: bold;
`;
const StyledDiv = styled.div`
  border: 2px solid red;
  width: 100px;
  height: 100px;
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.$inputColor || "#BF4F74"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

function App() {
  const localIsLogged = JSON.parse(localStorage.getItem("isLogged")) || false;
  console.log("local is logged: ", localIsLogged);
  const [isLogged, setIsLogged] = useState(localIsLogged);
  const inputRef = useRef(null);
  return (
    <>
      {isLogged ? (
        <>
          <Welcome />
          <Logout setIsLogged={setIsLogged} />
          <Product />
        </>
      ) : (
        <>
          <Login setIsLogged={setIsLogged} />
          <h4 style={{ color: "red", textAlign: "center" }}>
            you need to login to view products!
          </h4>
          <hr />
          <button style={styles.Btn}>click me</button>
          <Button as={ReversedButton}>salam</Button>
          <hr />
          <Link>Unstyled, boring Link</Link>
          <br />
          <StyledLink className={"test"}>Styled, exciting Link</StyledLink>
          <hr />
          <Input defaultValue="@probablyup" type="text" />
          <Input
            defaultValue="@geelen"
            type="text"
            $inputColor="red"
          />
          <hr />
          {/* <CustomInput inputRef={inputRef}/>
          <button
            onClick={() => {
              inputRef.current.style = 'background-color: red';
            }}
          >
            focus
          </button> */}
        </>
      )}
    </>
  );
}

// const Container = {width:'80%',margin:'0 auto'};

export default App;
