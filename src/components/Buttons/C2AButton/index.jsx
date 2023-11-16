import React from 'react'
import './index.css'

const index = ({ style, title = 'Title', icon: IconComponent }) => {
  return (
    <>
      <button style={style} id='c2a-button'>{title} {IconComponent && <IconComponent />}</button>
    </>
  )
}

export default index