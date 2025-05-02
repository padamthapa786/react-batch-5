import React from 'react'

const SingleVideo = ({video,onSelect,isActive}) => {
  return (
    <div className=' relative'>
        <img src={video.thumbnail} alt="" srcset="" />
    </div>
  )
}

export default SingleVideo