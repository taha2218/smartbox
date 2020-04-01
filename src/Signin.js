import React from 'react'
import './Signin.css'
import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeIn: {
      animation: 'x 1.9s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }

class Signin extends React.Component{

    constructor(props){
        super(props) ;
        this.state = {
            signInName : '',
            signInPassword : ''
        }
    }

    onNameChange = (event) => {
        this.setState({signInName: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignin = () => {
        console.log(this.state);
        fetch('http://localhost:3001/signin',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name: this.state.signInName,
            })
        }).then(response => response.json()).then(console.log).catch(err => console.log(err));
        this.props.onRouteChange('home');
    }

    render(){

        
        return(
            <div className='landingPage'>
                <StyleRoot>
                    <div className='Form' style={styles.fadeIn}>
                       <div className='buffer'></div>
                       <div className='info'>
                            <div className='login'>
                                LOGIN
                            </div>
                            <div className='input'>   
                                <input  onChange={this.onNameChange} type="text" placeholder="Username" />
                                <input  onChange={this.onPasswordChange} className='pad' type="password" placeholder="Password"/>
                            </div> 
                            <div className='submit'>
                                <button className='btn' type="button" onClick={this.onSubmitSignin} >Submit</button>
                            </div>              
                       </div>
                       <div className='buffer'></div> 
                    </div>
                </StyleRoot>
            </div>
        );
    }
}

export default Signin ;