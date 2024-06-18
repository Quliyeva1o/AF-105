import { useCallback, useMemo, useState } from "react";
import ListItems from "./ListItems";

const CallbackExample = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const items = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={themeStyle}>
      <input
        onChange={(e) => setNumber(parseInt(e.target.value))}
        type="number"
        placeholder="enter number"
      />
      <button onClick={() => setDark((currentTheme) => !currentTheme)}>
        toggle theme
      </button>
      <ListItems items={items} />
    </div>
  );
};

export default CallbackExample;
