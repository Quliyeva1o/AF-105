import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";

const CustomHooksWrapper = () => {
  //hooks - useState, useEffect, useRef, useForward, useMemo, useCallback, useReducer
  //useTransition, useHistory, useSelector
  //custom hooks
  // const[toggle, setToggle] = useState(false);
  // const[toggle, setToggle] = useToggle();
  const { data, loading, error } = useFetch(
    "https://northwind.vercel.app/api/categories"
  );
  const [numbers, setNumbers] = useLocalStorage("basket", []);
  return (
    <>
      <button
        onClick={() =>
          setNumbers(() => {
            return [...numbers, 2];
          })
        }
      >
        set Local
      </button>
      <h2>custom hooks</h2>

      {loading && <div>loading...</div>}
      {error && <span style={{ color: "red" }}>{error.message}</span>}
      {data &&
        data.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}

      <hr />
      {/* <button onClick={() => {setToggle()}}>{toggle ? "hide" : "show"}</button>
      <p style={{display: toggle ? "block" : "none"}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quasi
        impedit sed exercitationem provident nostrum praesentium quod ipsum
        repellat ullam. Consectetur eius repudiandae officia veritatis eaque cum
        obcaecati sit saepe?
      </p> */}
    </>
  );
};

export default CustomHooksWrapper;
