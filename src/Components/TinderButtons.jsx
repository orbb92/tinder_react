import React from 'react'
import {withRouter} from 'react-router-dom'

const sound= new Audio()
const TinderButtons = (props) => {
  
    return (
        <div>
            <div className='row'>
            <div className='col-6'>
            <button onClick={()=>{
                 props.PropertySet(props.num);
                props.history.push('/match/'+props.num)
                
              sound.src="https://www.myinstants.com/media/sounds/fail-sound-effect.mp3"
              sound.play();

              
            }} style={{borderRadius:'80%',backgroundImage:'url(http://www.pngmart.com/files/10/Dislike-PNG-Transparent-Image.png)',width:'10vh',height:'8vh',backgroundSize:'cover'}}></button>
            </div>
            <div className='col-6'>
            <button onClick={()=>{
                sound.src="https://www.myinstants.com/media/sounds/woohoo.mp3"
                sound.play()
                props.history.push('/match/'+props.num)
                props.PropertySet(props.num);
                props.addLiked(props.item)
            }} style={{borderRadius:'80%',backgroundImage:'url(http://pluspng.com/img-png/heart-png-red-heart-png-image-free-download-1331.png)',width:'10vh',height:'8vh',backgroundSize:'cover'}}></button>
            </div>
            </div>

        </div>
    )
}
export default withRouter(TinderButtons)
