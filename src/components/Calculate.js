/* eslint-disable no-eval */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
import * as React from 'react';
import Display from './Display';
import Keypad from './Keypad';

class Calculate extends React.Component {
  constructor() {
    super();

    this.state = {
      result: '',
    };
  }

    onClick = button => {
      const { result } = this.state;
      if (button === '=') {
        this.calculate();
      } else if (button === 'C') {
        this.reset();
      } else if (button === 'CE') {
        this.backspace();
      } else {
        this.setState({
          result: result + button,
        });
      }
    };

    calculate = () => {
      const { result } = this.state;
      let checkResult = '';
      if (result.includes('--')) {
        checkResult = result.replace('--', '+');
      } else {
        checkResult = result;
      }

      try {
        this.setState({
          result: `${eval(checkResult) || ''}`,
        });
      } catch (e) {
        this.setState({
          result: 'error',
        });
      }
    };

    reset = () => {
      this.setState({
        result: '',
      });
    };

    backspace = () => {
      const { result } = this.state;
      this.setState({
        result: result.slice(0, -1),
      });
    };

    render() {
      const { result } = this.state;
      return (
        <div>
          <div className="calculator-body">
            <Display result={result} />
            <Keypad onClick={this.onClick} />
          </div>
        </div>
      );
    }
}

export default Calculate;
