import './App.css';
import FuncComp from './FuncComp';
import ClassComp from './ClassComp';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

      functionClick: false,
      classClick: false
    }
  }
  render(){
    return(
      <div  className="App">
         <h1 className=" h-text">Styling using  Functional and Class Component</h1>

         <div className='btn'>
          <button className='btn1' onClick={() => this.setState({ functionClick: !this.state.functionClick })}>To see the style using functional component</button>
          <button className='btn2' onClick={() => this.setState({ classClick: !this.state.classClick })}>To see the style using class component</button>


          
        {this.state.functionClick && <FuncComp/>}
        {this.state.classClick && <ClassComp />}

        </div>
        </div>
    );
  }
}
export default App;