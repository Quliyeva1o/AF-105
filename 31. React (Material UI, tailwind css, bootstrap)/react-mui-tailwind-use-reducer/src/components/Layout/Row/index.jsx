import PropTypes from "prop-types";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Row = ({children}) => {
  return (
    <StyledRow>{children}</StyledRow>
  )
}


Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Row