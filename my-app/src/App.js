import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}


class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {numbers: [1,2,3,4,5,6]};
  }
  render(){
    function Numberlist(props){
      console.log(props)
      let numberlist = props.number.map(number=><li>{number}</li>)
      return (<ul>{numberlist}</ul>)
    }
    return (
      <div>
        <Numberlist number={this.state.numbers}/>
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock/>
        <Number/>
      </div>
    );
  }
}

export default App;
