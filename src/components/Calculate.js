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
      const { res } = this.state;
      if (button === '=') {
        this.calculate();
      } else if (button === 'C') {
        this.reset();
      } else if (button === 'CE') {
        this.backspace();
      } else {
        this.setState({
          result: res + button,
        });
      }
    };

    calculate = () => {
      try {
        this.setState({
          // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
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
      const { res } = this.state;
      this.setState({
        result: res.slice(0, -1),
      });
    };

    render() {
      const { res } = this.state;
      return (
        <div>
          <div className="calculator-body">
            <h1>Simple Calculator</h1>
            <Display result={res} />
            <Keypad onClick={this.onClick} />
          </div>
        </div>
      );
    }
}

export default Calculate;
