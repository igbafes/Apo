import React from 'react'

const Handle = props => {

    
  return (

    <>

    <h2>Hello {props.name} a.k.a {props.heroName}</h2>
   
      {props.children}
      
    </>
  )
}

export default Handle
