import React from 'react';
import VideoItem from './VideoItem';

// map over videos array for every Video inside VideoList we will render 1 single VideoItem component
const VideoList = ({videos}) => {
    // take video array from APP compenent and map over it
    const renderList = videos.map((video) => { //inside video object we are refering to many objects we refer to as videos so it will be call one time for every video object inside the video array
        return <VideoItem video={video} />;
    })

    return <div>{renderList}</div>;
};

export default VideoList;