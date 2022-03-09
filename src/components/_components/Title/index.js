import React from 'react'
import cl from './Title.module.scss'

function Title({ children }) {
  return <h2 className={cl.Title}>{children}</h2>
}

export default Title
