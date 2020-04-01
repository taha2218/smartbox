import React, { Component } from 'react'; 
import Clarifai from 'clarifai' ;
import Navbar from './Navbar';
import Signin from './Signin'
import Register from './Register'
import ImageLinkForm from './ImageLinkForm';
import FaceRecognition from './FaceRecognition';
import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'a8db28a335d541c5afc4ddafe94f91a3'
 });

 const styles = {
  fadeIn: {
    animation: 'x 1.9s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'login',
      isSignedIn:false 
    }
  }

  calculateFacelocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(face);
    const image = document.querySelector('.inputimage');
    const width = Number(image.width) ;
    const height = Number(image.height) ;
    console.log(width);
    console.log(height);
    return {
      leftcol: face.left_col*width ,
      toprow: face.top_row*height ,
      rightcol: width-(face.right_col*width),
      bottomrow:height-(face.bottom_row*height),
    }
  }    

  onRouteChange = (route) => {
    if(route === 'home')
    {
      this.setState({isSignedIn:true});
    }
    else{ 
      this.setState({isSignedIn:false});
    }
    this.setState({route:route});
  }

  displayFaceBox = (box) => {
    this.setState({box:box});
    console.log(box);
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl:this.state.input});
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
    .then(response =>this.displayFaceBox(this.calculateFacelocation(response)))
    .catch( err => console.log(err));
  }

  render(){ 
      return (
        <div className="App">
        <Navbar onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} route={this.state.route} />
        { this.state.route === 'home' ?
            <div>
              <StyleRoot>
                  <div className='container' style={styles.fadeIn}>
                    <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
                    <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />   
                  </div>  
              </StyleRoot>
            </div>: 
            (this.state.route === 'login' ? 
              <Signin onRouteChange={this.onRouteChange} />
              :
              <Register onRouteChange={this.onRouteChange} />
            ) 
        }
        </div> 
      )
  ;}
}

export default App;
