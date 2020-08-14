import React from 'react'

import './VideoHeader.css'

const VideoHeader = ({video}) => {
  return (
    <>
      <div className="video__hero__container__overlay">
        <video className="video__hero__container" autoPlay loop muted>
          <source className="video__source" src={video} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default VideoHeader
