import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Container;
