/* eslint-disable react/display-name */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import * as React from 'react';

const Display = React.forwardRef((props, ref) => {
  const { result } = props;
  return (
    <div className="result">
      <p className="inner-result" ref={ref}>{result}</p>
    </div>
  );
});
export default Display;
