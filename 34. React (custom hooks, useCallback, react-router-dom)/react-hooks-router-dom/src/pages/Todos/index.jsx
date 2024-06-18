import { Link } from "react-router-dom";
import Header from "../../components/Header";
import useFetch from "../../hooks/useFetch";

const Todos = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      <Header />
      <ul>
        {data &&
          data.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.title}</span>
                <button>
                    <Link to={`/todos/${item.id}`}>detail</Link>
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Todos;
