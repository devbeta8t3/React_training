import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}..</h2>
//     </div>
//   );
// }
/*
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  //컴포넌트 출력물이 DOM에 렌더링 된 후에 실행
  componentDidMount() {
    console.log(`컴포넌트가 DOM에 마운트 됨`);
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  //컴포넌트가 DOM에 언마운트 될 때 실행
  componentWillUnmount() {
    console.log(`컴포넌트가 DOM에 언마운트 됨`);
    clearInterval(this.timerID);
  }
    
  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// function tick() {
   
//   root.render(
//     <Clock  />
//   );
// }
// setInterval(tick, 1000)

