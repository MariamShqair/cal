import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    value: ""
};


handleClick(params) { 
    this.setState({value:this.state.value+params})
}

handleDeleteAllElement =()=>{
    this.setState({value:""})
}
handleDeleteOneElement = ()=>{
    
    let value =  this.state.value;
    let car =    value.slice(0, -1);
    this.setState({value:car})
}
evaluateFirstSolution=(param)=> {
    
    let value = eval(this.state.value)
    this.setState({value})
}
render() {
    console.log(this.state.value)
    return (
        <div className="body">
            <h1>CALCULATOR</h1>
            <input
                type="text"
                id="fname"
                name="firstname"
                placeholder={this.state.value}
                value={this.state.value}
                />
            <div className="box">
                <div className="number">
                    <ul>
                        <li>
                            
                            <h5>

                                <a onClick={ () => this.handleClick("1")}>1</a>
                            </h5>
                        </li>
                        <li>
                            <h5>
                                <a onClick={() => this.handleClick("2")}>2</a>
                            </h5>
                        </li>
                        <li>
                            <h5>
                                <a onClick={() => this.handleClick("3")}>3</a>
                            </h5>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>
                                <a onClick={() => this.handleClick("4")}>4</a>
                            </h5>
                        </li>
                        <li>
                            <h5>
                                <a onClick={() => this.handleClick("5")}>5</a>
                            </h5>
                        </li>
                        <li>
                            <h5>
                                <a onClick={() => this.handleClick("6")}>6</a>
                            </h5>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>
                                <a onClick={() => this.handleClick("7")}>7</a>
                            </h5>
                        </li>
                        <li>
                            <h5>
                                <a onClick={() => this.handleClick("8")}>8</a>
                            </h5>
                        </li>
                        <li>
                            <h5>
                                <a onClick={() => this.handleClick("9")}>9</a>
                            </h5>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>
                                <a onClick={() => this.handleClick('.')}>.</a>
                            </h5>
                        </li>
                        <li>
                            <h5>
                                <a onClick={() => this.handleClick("0")}>0</a>
                            </h5>
                        </li>
                    </ul>
                </div>
                <div className="operator">
                    <ul>
                        <li>
                            <h5>
                                <a onClick={() => this.handleDeleteOneElement('C')}>C</a>
                            </h5>
                        </li>
                        <li>
                            <h5>
                                <a onClick={() => this.handleDeleteAllElement('CC')}>CC</a>
                            </h5>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>
                                <a onClick={() => this.handleClick('+')}>+</a>
                            </h5>
                        </li>
                        <li>
                            <h5>
                                <a onClick={() => this.handleClick('-')}>-</a>
                            </h5>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>

                                <a onClick={() => this.handleClick('/')}>/</a>
                            </h5>
                        </li>
                        <li>
                            <h5>
                                <a onClick={() => this.handleClick('*')}>*</a>
                            </h5>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5>
                                <a onClick={() => this.evaluateFirstSolution('=')}>=</a>
                            </h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
}
export default  App;