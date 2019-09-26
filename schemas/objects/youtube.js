import React from 'react'
import getYouTubeID from 'get-youtube-id'

const YoutubePreview = ({ value }) => {
  const id = getYouTubeID(value.url)
  const url = `https://www.youtube.com/embed/${id}`
  if (!id) {
    return <div>you messed up!</div>
  }

  return (
    <iframe
      title="Youtube Preview"
      width="560"
      height="315"
      src={url}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  )
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'youtube',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: YoutubePreview
  }
}
