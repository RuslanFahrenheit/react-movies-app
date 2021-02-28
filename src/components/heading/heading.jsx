import React from 'react';
import PropTypes from 'prop-types';
import './heading.scss';

const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Heading = ({
  level,
  title,
}) => {
  const safeHeading = level ? level.toLowerCase() : '';
  const HeadingTag = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';

  return (
    <HeadingTag
      className={`heading heading--${HeadingTag}`}
    >
      {title}
    </HeadingTag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf(validHeadingLevels).isRequired,
  title: PropTypes.string.isRequired,
};

export { Heading };
