import React, { useEffect, useState } from 'react'

function App() {

  const [missions, setMissions] = useState<any[]>([])

  const [statuses, setStatuses] = useState<any[]>(["Pending", "In Progress", "Completed"])

  const getData = async () => {
    try {
      const response = await fetch("https://reactexambackend.onrender.com/missions/8463488")
      const data = await response.json()
      setMissions(data)
      } catch (error) {
      console.log("Can't get data", error)
      }
    }

    useEffect( () => {
      getData()
  }, [missions, statuses])

  return (
    <div>
      
    </div>
  )
}

export default App