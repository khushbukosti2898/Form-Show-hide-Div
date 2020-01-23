import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import DisplayForm from './DisplayForm';


class DisplayState extends React.Component{
    state={
        name:'',
        uname:'',
        pwd:'',
        mobile:'',
        show:false,
        toggle:false
    }
    getInput=(e)=>{
        //console.log(e.target);
        this.setState({
        [e.target.name]:(e.target.value)
    });
    //console.log(this.state.name+" "+this.state.uname)
}
    submit=()=>{
        let {show}= this.state;
        //console.log(this.state.name+" "+this.state.uname) 
        this.setState({
            show:!show,
        })                                                            
    }

    
    render(){
        let element;
        element=<div>
            <Display getInput={this.getInput} submit={this.submit} handleToggle={this.handleToggle}/>
            {
                (this.state.show) && 
                <DisplayForm data={this.state}/>
            }
        </div>
        return ( element );

    }
}
export default DisplayState;