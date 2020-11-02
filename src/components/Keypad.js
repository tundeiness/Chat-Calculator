/* eslint-disable react/prop-types */
import * as React from 'react';

const Keypad = props => {
  const { onClick } = props;
  return (
    <div className="button">
      <button type="button" name="(" onClick={e => onClick(e.target.name)}>(</button>
      <button type="button" name="CE" onClick={e => onClick(e.target.name)}>CE</button>
      <button type="button" name=")" onClick={e => onClick(e.target.name)}>)</button>
      <button type="button" name="C" onClick={e => onClick(e.target.name)}>C</button>

      <button type="button" name="1" onClick={e => onClick(e.target.name)}>1</button>
      <button type="button" name="2" onClick={e => onClick(e.target.name)}>2</button>
      <button type="button" name="3" onClick={e => onClick(e.target.name)}>3</button>
      <button type="button" name="+" onClick={e => onClick(e.target.name)}>+</button>
      <br />

      <button type="button" name="4" onClick={e => onClick(e.target.name)}>4</button>
      <button type="button" name="5" onClick={e => onClick(e.target.name)}>5</button>
      <button type="button" name="6" onClick={e => onClick(e.target.name)}>6</button>
      <button type="button" name="-" onClick={e => onClick(e.target.name)}>-</button>
      <br />

      <button type="button" name="7" onClick={e => onClick(e.target.name)}>7</button>
      <button type="button" name="8" onClick={e => onClick(e.target.name)}>8</button>
      <button type="button" name="9" onClick={e => onClick(e.target.name)}>9</button>
      <button type="button" name="*" onClick={e => onClick(e.target.name)}>x</button>
      <br />

      <button type="button" name="." onClick={e => onClick(e.target.name)}>.</button>
      <button type="button" name="0" onClick={e => onClick(e.target.name)}>0</button>
      <button type="button" name="=" onClick={e => onClick(e.target.name)}>=</button>
      <button type="button" name="/" onClick={e => onClick(e.target.name)}>÷</button>
      <br />
    </div>
  );
};

export default Keypad;
