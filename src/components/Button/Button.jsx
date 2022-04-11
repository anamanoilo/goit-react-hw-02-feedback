import PropTypes from 'prop-types';

const Button = ({ name, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
