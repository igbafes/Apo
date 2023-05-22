import React from 'react'

const Handle = props => {

    
  return (

    <>

    <h1>Hello {props.name} a.k.a {props.heroName}</h1>
   
      {props.children}
      
    </>
  )
}

export default Handle
