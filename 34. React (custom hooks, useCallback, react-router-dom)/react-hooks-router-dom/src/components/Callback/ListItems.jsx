import { useEffect, useState } from "react";

const ListItems = ({ items }) => {
  const [nums, setNums] = useState([]);
  useEffect(() => {
    console.log('numbers changed!');
    setNums(items(10));
  }, [items]);
  return <ul>
    {nums && nums.map((num,idx)=>{
        return <li key={idx}>{num}</li>
    })}
  </ul>;
};

export default ListItems;
