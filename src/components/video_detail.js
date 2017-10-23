import React from 'react';


const VideoDetail = ({video}) => {
    if(!video){
        return <div>loading</div>;
    }
    return(
        <div className='video-detail md-col-8'>
            <div className='embed-responsive embed-responsive-16by9'> 
            <iframe className='embed-responsive-item' src={`http://www.youtube.com/embed/${video.id.videoId}`} />
            </div>
            <div className='details'>
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;