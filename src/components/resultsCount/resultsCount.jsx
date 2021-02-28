import React from 'react';
import PropTypes from 'prop-types';

const ResultsCount = ({
  count,
}) => {
  const item = (count === 1) ? 'movie' : 'movies';

  return (
    <span>
      {`${count} ${item} found`}
    </span>
  );
};

ResultsCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export { ResultsCount };
