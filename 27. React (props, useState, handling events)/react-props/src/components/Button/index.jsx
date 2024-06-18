import "./index.css";
import PropTypes from 'prop-types';

const Button = ({counter,text,variant = 'danger'}) => {

  return <button onClick={()=>{
    if (text=='+') {
      counter++;
    }
    else if(text=='-'){
      counter--;
    }
    console.log('counter:',counter);
  }} className={variant}>{text}</button>;
};

Button.propTypes = {
  variant:  PropTypes.oneOf(['danger', 'error','warning','success']),
  text: PropTypes.string,
  counter: PropTypes.number
}

export default Button;
