import React from 'react'
import MissionModel from '../models/missionModel'

interface Props{
    key: string
    mission: MissionModel
    statuses: string[]
    setStatus: (x: (status: string) => string) => void;
}

function Mission({mission}:  Props) {

  const deleteMission = async () => {
    console.log(mission);
    fetch(`https://reactexambackend.onrender.com/missions/8463488/${mission._id}`, { method: 'DELETE' })
  }

  const changeStatus = () => {

  }

  return (
    <div className={ mission.status }>
      <p>Name:  { mission. name }</p>
      <p>Status:  { mission.status }</p>
      <p>Priorety { mission.priorety }</p>
      <p>Description { mission.description }</p>
      <button onClick={deleteMission}>Delete</button>
      <button onClick={changeStatus}>{mission.status}</button>
    </div>
  )
}

export default Mission