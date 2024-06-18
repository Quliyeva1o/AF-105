import "./App.css";
import Students from "./Students";
import Button from "./components/Button";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Products from "./components/Products";
import { useState } from "react";

function App() {
  //hooks - useState, useRef, useCallback, useMemo
  //custom hooks
  let [counter, setCounter] = useState(0);
  const person1 = { name: "Emin", surname: "Suleymanov", age: 21 };
  const person2 = { name: "Emil", surname: "Hajiev", age: 19 };
  function displayInfo(obj) {
    return `${obj.name} ${obj.surname}, ${obj.age}`;
  }

  const products = [
    { id: 1, name: "Zara", price: 19 },
    { id: 2, name: "Nike", price: 49 },
    { id: 3, name: "Adidas", price: 98 },
  ];
  return (
    <>
      <Students />
      <hr />
      <button
        onClick={() => {
          if (counter > 0) {
            setCounter((prevState) => --prevState);
          }
        }}
      >
        -
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter(++counter);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        reset
      </button>
      <hr />
      <Header />
      <Hello info={() => displayInfo(person1)} />
      <Hello info={() => displayInfo(person2)} />
      <Button />
      <Button variant={"success"} />
      <Button variant={"warning"} />
      <hr />
      <Products products={products} />
    </>
  );
}

export default App;
