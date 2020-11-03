import * as React from 'react';
import PropTypes from 'prop-types';
// import Top from './OperatorPanel';

const Keypad = props => {
  const { onClick } = props;
  return (
    <div className="button">
      <div className="operator-wrapper">
        <button className="operator-wrapper-item-one" type="button" name="C" onClick={e => onClick(e.target.name)}>AC</button>
        <button className="operator-wrapper-item-two" type="button" name="/" onClick={e => onClick(e.target.name)}>÷</button>
        <button className="operator-wrapper-item-three" type="button" name="." onClick={e => onClick(e.target.name)}>.</button>
        <button className="operator-wrapper-item-four" type="button" name="-" onClick={e => onClick(e.target.name)}>-</button>
      </div>
      <div className="bottom-wrapper">
        <div className="digits">
          <button className="numbers" type="button" name="1" onClick={e => onClick(e.target.name)}>1</button>
          <button className="numbers" type="button" name="2" onClick={e => onClick(e.target.name)}>2</button>
          <button className="numbers" type="button" name="3" onClick={e => onClick(e.target.name)}>3</button>

          <button className="numbers" type="button" name="4" onClick={e => onClick(e.target.name)}>4</button>
          <button className="numbers" type="button" name="5" onClick={e => onClick(e.target.name)}>5</button>
          <button className="numbers" type="button" name="6" onClick={e => onClick(e.target.name)}>6</button>

          <button className="numbers" type="button" name="7" onClick={e => onClick(e.target.name)}>7</button>
          <button className="numbers" type="button" name="8" onClick={e => onClick(e.target.name)}>8</button>
          <button className="numbers" type="button" name="9" onClick={e => onClick(e.target.name)}>9</button>
          <button className="zero" type="button" name="0" onClick={e => onClick(e.target.name)}>0</button>
        </div>
        <div className="side-operators">
          <button className="addition" type="button" name="+" onClick={e => onClick(e.target.name)}>+</button>
          <button className="subtraction" type="button" name="-" onClick={e => onClick(e.target.name)}>-</button>
          <button className="times" type="button" name="*" onClick={e => onClick(e.target.name)}>x</button>
          <button className="equals" type="button" name="=" onClick={e => onClick(e.target.name)}>=</button>
        </div>
      </div>
    </div>
  );
};

Keypad.propTypes = {
  onClick: PropTypes.string.isRequired,
};

export default Keypad;
