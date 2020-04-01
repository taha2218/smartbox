import React from 'react'
import './Register.css'
import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeIn: {
      animation: 'x 1.9s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }

class Register extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            registerName : '',
            registerEmail : '',
            registerPassword: ''
        }
    }

    onNameChange=(event)=>{
        this.setState({registerName:event.target.value})
    }

    onEmailChange =(event)=>{
        this.setState({registerEmail:event.target.value})
    }

    onPasswordchange=(event)=>{
        this.setState({registerPassword:event.target.value})
    }

    onButtonregister=()=>{
        console.log(this.state)
        this.props.onRouteChange('login');
        fetch('http://localhost:3001/register',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword 
            })
        }).then(response => response.json()).then(console.log).catch(err => console.log(err));
    }

    render() {
        return(
            <div className='landingPage'>
                <StyleRoot>
                    <div className='Form' style={styles.fadeIn}>
                       <div className='buffer'></div>
                       <div className='info'>
                            <div className='login'>
                                SIGN UP
                            </div>
                            <div className='input'>   
                                <input onChange={this.onNameChange} type="text" placeholder="Name" />
                                <input onChange={this.onEmailChange} className='pad' type="text" placeholder="Email" />
                                <input onChange={this.onPasswordchange} className='pad' type="password" placeholder="Password"/>
                            </div> 
                            <div className='submit'>
                                <button className='btn' type="button" onClick={this.onButtonregister} >Register</button>
                            </div>              
                       </div>
                       <div className='buffer'></div> 
                    </div>
                </StyleRoot>
            </div>
        );
    }

}

export default Register ;