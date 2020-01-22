import React from 'react';
import Display from './Display';
import DisplayState from './DisplayState';


class DisplayForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
            <h2>{this.props.data.name}</h2>
            <h2>{this.props.data.uname}</h2>
            <h2>{this.props.data.pwd}</h2>
            <h2>{this.props.data.mobile}</h2>
        </div>
        );
    }

   
}

export default DisplayForm;