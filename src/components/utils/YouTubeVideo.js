import React from 'react'

const YouTubeVideo = ({video_id}) => {
    return (
        <div className='my-8'>
            <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src={`https://www.youtube.com/embed/${video_id}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
};

export default YouTubeVideo;