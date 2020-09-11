import React from 'react'
import { Embed } from 'semantic-ui-react'
import './VideoHero.css'

const VideoHero = ({ isLoading }) => {
  return (
    <section className="video__container">
        <Embed
          active={true}
          url="https://player.vimeo.com/video/158629788?autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1&quality=auto"
        />

    </section>
  )
}

export default VideoHero
