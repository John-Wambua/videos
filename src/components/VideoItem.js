import React from "react";
import './VideoItem.css'

const VideoItem =({video,onVideoSelect})=>{

    return(
        <div onClick={()=>onVideoSelect(video)} className="video-item item">
            <img style={{width: '185px'}} alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">{video.snippet.title.substring(0,21)}...</div>
            </div>

        </div>
    )
}
export default VideoItem;