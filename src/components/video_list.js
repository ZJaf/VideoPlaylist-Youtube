import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
   // console.log('list',props.onVideoSelect);
    const videoarray = props.videos.map((video)=>{
         return (
         <VideoListItem 
         onVideoSelect = {props.onVideoSelect}
         key={video.etag} 
         video={video} />
        )

        });
    return (
        <ul className="md-col-8 list-group">
            {videoarray}
        </ul>
    );  
}

export default VideoList;