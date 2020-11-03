/* eslint-disable react/prop-types */
import React from 'react';

const OperatorPanel = props => {
  const { onClick } = props;

  return (
    <div className="operator-wrapper">
      <button className="operator-wrapper-item-one" type="button" name="C" onClick={e => onClick(e.target.name)}>AC</button>
      <button className="operator-wrapper-item-two" type="button" name="/" onClick={e => onClick(e.target.name)}>÷</button>
      <button className="operator-wrapper-item-three" type="button" name="." onClick={e => onClick(e.target.name)}>.</button>
      <button className="operator-wrapper-item-four" type="button" name="-" onClick={e => onClick(e.target.name)}>-</button>
    </div>
  );
};
export default OperatorPanel;
