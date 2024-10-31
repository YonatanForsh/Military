import React from 'react'
import Mission from './Mission'
import MissionModel from '../models/missionModel';

interface Props{
    missions: any[]
}


function List({missions}: Props) {

  return (
    <div>
      { missions.map( m=> <Mission key={m._id} mission={m}/>)}
    </div>
  )
}

export default List