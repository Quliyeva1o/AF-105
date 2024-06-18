import PropTypes from 'prop-types';

const Hello = (props) => {
  const info = props.info();
  return (
    <h3>
      Hello, {info}
    </h3>
  );
};

Hello.propTypes = {
  info: PropTypes.func.isRequired
}

export default Hello;
