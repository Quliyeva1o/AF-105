import { useEffect, useState } from "react";

const useFetch = function (url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("error occurred!");
        } else {
          return res.json();
        }
      })
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {data, loading, error};
};

export default useFetch;
