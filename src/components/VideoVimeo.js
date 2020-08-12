import React from 'react'

import { Embed } from 'semantic-ui-react'

const VideoVimeo = ({ isLoading }) => {
  return (
    <div className="video__container">
        <Embed
          active={true}
          url="https://player.vimeo.com/video/158629788?autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1&quality=auto"
        />

    </div>
  )
}

export default VideoVimeo
