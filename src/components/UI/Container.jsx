import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-screen-xl py-8 px-5 mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
