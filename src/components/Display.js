/* eslint-disable react/prop-types */
import * as React from 'react';

const Display = props => {
  const { result } = props;
  return (
    <div className="result">
      <p className="inner-result">{result}</p>
    </div>
  );
};

export default Display;
