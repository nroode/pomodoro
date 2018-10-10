import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import Timer from './components/Timer.js';
import Adjust from './components/Adjust.js';

const Adjustments = [
  {
    title: 'Session Length',
    id: 'session-length',
    time: 25,
  },
  {
    title: 'Break Length',
    id: 'break-length',
    time: 5,
  },
]

class App extends Component {
  render() {
    return (
      <div id="App">
        <Timer timeMin={Adjustments[0].time}/>
        <div id="adjustTime">

          {Adjustments.map((adjust) =>
            <Adjust 
            title={adjust.title} 
            time={adjust.time}
            id={adjust.id} 
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
