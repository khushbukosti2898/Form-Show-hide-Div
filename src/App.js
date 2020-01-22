import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayState from './DisplayState.js';

function App() {
  return (
    <div className="App">
      {
        <DisplayState/>
      
      }
    </div>
  );
}

/* export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display.js';

class App extends React.Component{
  state={
    a:10
  }
  render(){
    return <Display name={this.state}/>
  }
}

export default App;
 */export default App;