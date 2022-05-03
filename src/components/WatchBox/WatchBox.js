import apiConfig from '../../api/apiConfigs'
import './WatchBox.css'


function WatchBox(){
    return(
        <div className='video-box'>
            <iframe width="900" height="500"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
        </div>
    )
}

export default WatchBox