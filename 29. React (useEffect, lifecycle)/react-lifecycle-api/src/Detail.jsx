
// eslint-disable-next-line react/prop-types
const Detail = ({category}) => {
  return (
    <div style={{border:"1px solid gray"}}>{category?.name}</div>
  )
}

export default Detail