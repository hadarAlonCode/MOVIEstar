import React from 'react';
import ReactPlayer from 'react-player'

const Youtube = props => {

    const {video_key} = props

    return (
        <div className="trailer">
                                     
            <ReactPlayer 
            url={`https://www.youtube.com/watch?v=${video_key}`} 
            class ="trailer__player"
            // playIcon
            playing
            width="100%"
            height="100%"
            controls={true} 
            muted={true}
            config={{
                youtube:{
                    playerVars: { 
                        autoplay: 0, 
                        playsinline: 0, 
                        showinfo: 0, 
                        rel: 0, 
                    }
                }
                }}
            />    
    </div> 
    );
};



export default Youtube;