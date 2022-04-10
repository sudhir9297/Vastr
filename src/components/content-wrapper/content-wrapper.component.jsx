import React from 'react'
import './content-wrapper.styles.scss'

function ContentWrapper({children}) {
  return (
    <div className='wrappper'>{children}</div>
  )
}

export default ContentWrapper