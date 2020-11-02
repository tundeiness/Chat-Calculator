/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
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
      if (button === '=') {
        this.calculate();
      } else if (button === 'C') {
        this.reset();
      } else if (button === 'CE') {
        this.backspace();
      } else {
        this.setState({
          result: this.state.result + button,
        });
      }
    };

    calculate = () => {
      let checkResult = '';
      if (this.state.result.includes('--')) {
        checkResult = this.state.result.replace('--', '+');
      } else {
        checkResult = this.state.result;
      }

      try {
        this.setState({
          // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
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
      this.setState({
        result: this.state.result.slice(0, -1),
      });
    };

    render() {
      return (
        <div>
          <div className="calculator-body">
            <Display result={this.state.result} />
            <Keypad onClick={this.onClick} />
          </div>
        </div>
      );
    }
}

export default Calculate;
