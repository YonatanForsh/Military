import React from 'react'
import Mission from './Mission'

interface Props{
    missions: any[]
}


function List({missions}: Props) {

  return (
    <div>
        { missions.map( m=> <Mission key={m.id} mission={m}/>)}
    </div>
  )
}

export default List