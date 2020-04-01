import React from 'react' 
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl,box}) => {
    return(
        <div className='bgcontainer'>
            <div className='ImageContainer'>    
                <img className='inputimage' src={imageUrl} alt='' style={{maxHeight:'300px'}} />
                <div className='boundingbox' style={{top:box.toprow,left:box.leftcol,right:box.rightcol,bottom:box.bottomrow}} ></div>
            </div>
        </div>
    );
}

export default FaceRecognition ;