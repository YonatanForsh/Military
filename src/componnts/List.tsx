import React from 'react'
import Mission from './Mission'
import MissionModel from '../models/missionModel';

interface Props{
    missions: any[]
    statuses: string[]
    setStatuses: (x:any) => void
}


function List({missions, statuses, setStatuses}: Props) {

  return (
    <div>
      { missions.map( m=> <Mission key={m._id} mission={m} statuses={statuses} setStatuses={setStatuses}/>)}
    </div>
  )
}

export default List