/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-tabs */
import React from 'react';
// import SocketIOClient from 'socket.io-client';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      msg: [],
    };

    // this.socket = SocketIOClient('http://localhost:3000/');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.socket.on('message', o => {
    // this.setState({ msg: this.state.msg.concat(o) });
    // });
  }

    handleChange = e => {
      this.setState({ value: e.target.value });
    }

	handleSubmit = e => {
	  console.log(this.state.value);
	  // this.socket.emit('message', this.state.value);
	  this.setState({ value: '' });
	  e.preventDefault();
	}

	render() {
	  return (
  <div>
    <ul id="messages">{ this.state.msg.map(o => (<li key={o}>{o}</li>)) }</ul>
    <input id="m" autoComplete="off" value={this.state.value} onChange={this.handleChange} />
    {/* <button type="button" onClick={this.handleSubmit}>Send </button> */}
  </div>
	  );
	}
}

export default Chat;
