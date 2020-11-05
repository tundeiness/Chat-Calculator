/* eslint-disable no-eval */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
import * as React from 'react';
import Display from './Display';
import Keypad from './Keypad';
// import Chat from './Chat';

class Calculate extends React.Component {
  constructor() {
    super();

    this.state = {
      result: '',
      input: '',
      computationHistory: [],
    };
  }

    onClick = button => {
      const { result } = this.state;
      if (button === '=') {
        this.calculate();
      } else if (button === 'C') {
        this.reset();
      } else {
        this.setState({
          result: result + button,
        });
        console.log(result);
      }
    };

    calculate = () => {
      const { result } = this.state;
      let checkResult = '';
      if (result.includes('--')) {
        checkResult = result.replace('--', '+');
      } else {
        checkResult = result;
        // console.log(checkResult);
        this.setState(state => {
          const computationHistory = state.computationHistory.concat(checkResult);
          return {
            computationHistory,
          };
        });
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

    broadcastComputation = () => {
      const { computationHistory } = this.state;
      computationHistory.forEach(m => m.emit('message', m));
    };

    getInput = () => {

    }

    render() {
      const { result, computationHistory } = this.state;
      console.log(computationHistory);
      return (
        <div>
          <div className="calculator-body">
            <Display result={result} />
            <Keypad getInput={this.getInput} onClick={this.onClick} />
          </div>
          {/* <Chat /> */}
        </div>
      );
    }
}

export default Calculate;
