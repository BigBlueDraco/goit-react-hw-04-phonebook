import PropTypes from 'prop-types';

export const Filter = ({ searcheFunc }) => {
  return <input type="text" name="filter" onInput={e => searcheFunc(e)} />;
};
Filter.propTypes = {
  searcheFunc: PropTypes.func.isRequired,
};
