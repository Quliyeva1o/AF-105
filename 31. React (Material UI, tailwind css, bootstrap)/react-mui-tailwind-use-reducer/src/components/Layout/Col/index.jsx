import PropTypes from "prop-types";
import styled from "styled-components";

// width: calc(100% / 12 * 6)

const StyledColumn = styled.div`
    width:  calc(100% / 12 * ${props => props.size});
    padding: 0px 16px;
`

const Col = ({size, children}) => {
  return (
    <StyledColumn size={size}>{children}</StyledColumn>
  )
}

Col.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    size: PropTypes.number
};

export default Col