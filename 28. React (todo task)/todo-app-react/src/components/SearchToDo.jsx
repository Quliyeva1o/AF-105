import PropTypes from "prop-types"

const SearchToDo = ({setQuery}) => {
  return (
    <input onChange={(e)=>{
      setQuery(e.target.value)
    }} placeholder="search todo" type='text'/>
  )
}

SearchToDo.propTypes = {
  setQuery: PropTypes.func
}

export default SearchToDo