import React from 'react'
import Tilt from 'react-tilt'
import './Navbar.css'

function Navbar({onRouteChange,isSignedIn,route}) {
       if (isSignedIn) {
            return(<nav>
            <div className='IconItem pushRight'>
                <Tilt className="Tilt" options={{max : 55, reverse: true, easing:"cubic-bezier(.03,.98,.52,.99)"}} 
                    style={{display:'flex',height:'8vh' ,justifyContent:'center',alignItems:'center'}} >
                        <div className="Tilt-inner" 
                            style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
                                <img className='logo' src={require('./icon.png')} alt='' style={{width:'25px',height:'25px'}} /><p>Smartbox</p> 
                        </div>
                </Tilt>
            </div>
            <div className='IconItem' onClick={ () => onRouteChange('login')} ><i className="material-icons md-18">exit_to_app</i><p>Sign Out</p></div>
       </nav>);
       }else if(route === 'login'){
            return(<nav>
            <div className='IconItem pushRight'>
                <Tilt className="Tilt" options={{max : 55, reverse: true, easing:"cubic-bezier(.03,.98,.52,.99)"}} 
                    style={{display:'flex',height:'8vh' ,justifyContent:'center',alignItems:'center'}} >
                        <div className="Tilt-inner" 
                            style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
                                <img className='logo' src={require('./icon.png')} alt='' style={{width:'25px',height:'25px'}} /><p>Smartbox</p> 
                        </div>
                </Tilt>
            </div>
            <div className='IconItem' style={{backgroundColor:'#ff429a'}} onClick={ () => onRouteChange('login')}><i className="material-icons md-18" >account_box</i><p>Log In</p></div>
            <div className='IconItem' onClick={ () => onRouteChange('register')} ><i className="material-icons md-18">face</i><p>Sign Up</p></div>
        </nav>);
       }else{
        return(<nav>
        <div className='IconItem pushRight'>
            <Tilt className="Tilt" options={{max : 55, reverse: true, easing:"cubic-bezier(.03,.98,.52,.99)"}} 
                style={{display:'flex',height:'8vh' ,justifyContent:'center',alignItems:'center'}} >
                    <div className="Tilt-inner" 
                        style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
                            <img className='logo' src={require('./icon.png')} alt='' style={{width:'25px',height:'25px'}} /><p>Smartbox</p> 
                    </div>
            </Tilt>
        </div>
        <div className='IconItem' onClick={ () => onRouteChange('login')}><i className="material-icons md-18">account_box</i><p>Log In</p></div>
        <div className='IconItem' style={{backgroundColor:'#ff429a'}} onClick={ () => onRouteChange('register')} ><i className="material-icons md-18">face</i><p>Sign Up</p></div>
    </nav>);
   }
}
export default Navbar ;