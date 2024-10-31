import React, { useEffect, useRef, useState } from 'react'
import Add from './componnts/Add'
import List from './componnts/List'

function App() {

  const [missions, setMissions] = useState<any[]>([])

  const [statuses, setStatuses] = useState<any[]>(["Pending", "In Progress", "Completed"])

  const [prioritys, setPrioritys] = useState<any[]>(["Low", "High"])

  const [newMission, setMission] = useState<any>(null) 

  
  useEffect( () => {
    //Get data from APIserver
    const getData = async () => {
      try {
        const response = await fetch("https://reactexambackend.onrender.com/missions/8463488")
        const data = await response.json()
        setMissions(data)
      } catch (error) {
        console.log("Can't get data", error)
      }
    }
    getData()
  }, [missions, statuses])

  return (
    <div>
      <Add setMissions={setMissions} statuses={statuses} prioritys={prioritys} newMission={newMission}/>
      <List missions={missions} />
    </div>
  )
}

export default App