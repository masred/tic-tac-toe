import PropTypes from 'prop-types';

export const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="h-[105px] w-[105px] border border-sky-950 bg-white text-xl font-bold cursor-pointer"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func,
};
