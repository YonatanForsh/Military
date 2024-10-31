import React from 'react'
import MissionModel from '../models/missionModel'

interface Props{
    key: string
    mission: MissionModel
    statuses: string[]
    setStatuses: (x: (status: string) => string) => void;
}

function Mission({ mission, statuses }:  Props) {

  const deleteMission = async () => {
    console.log(mission);
    fetch(`https://reactexambackend.onrender.com/missions/8463488/${mission._id}`, { method: 'DELETE' })
  }

  const changeStatus = () => {
    fetch(`https://reactexambackend.onrender.com/missions/8463488/progress/${mission._id}`, { method: 'POST' })
  }

  return (
    <div className={ mission.status }>
      <p>Name:  { mission. name }</p>
      <p>Status:  { mission.status }</p>
      <p>Priorety { mission.priorety }</p>
      <p>Description { mission.description }</p>
      <button onClick={deleteMission}>Delete</button>
      { mission.status != "Completed" && <button onClick={changeStatus}>{mission.status}</button>}
    </div>
  )
}

export default Mission