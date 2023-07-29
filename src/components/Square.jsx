import PropTypes from 'prop-types';

export const Square = ({ value, onSquareClick }) => {
  console.log(onSquareClick);
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onSquareClick: PropTypes.func.isRequired,
};
