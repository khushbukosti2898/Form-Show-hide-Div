import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayState from './DisplayState.js';


import { render } from '@testing-library/react';

function Display(props) {
  return (
    <div>
        <h1>Form</h1>
        <form>
        <div class="form-group">
            <span>Name</span>
            <input type="text" className="form-control" name="name" onChange={props.getInput}>
            </input><br/>
            <span>UserName</span>
            <input type="text" className="form-control" name="uname" onChange={props.getInput}>
            </input><br />
            <span>Password</span>
            <input type="password" className="form-control" name="pwd" onChange={props.getInput}>
            </input><br />
            <span>Mobile</span>
            <input type="text" className="form-control" name="mobile" onChange={props.getInput}>
            </input><br />
        </div>
        </form>
        <button onClick={props.submit}>Submit</button>

    </div>
  );

}

export default Display;
