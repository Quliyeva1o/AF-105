
const SortByName = ({filteredTodos,setTodos}) => {
  return (
    <button onClick={()=>{
        setTodos([...filteredTodos.sort((x,y)=>x.title.localeCompare(y.title))]);
    }}>Sort by Name</button>
  )
}

export default SortByName