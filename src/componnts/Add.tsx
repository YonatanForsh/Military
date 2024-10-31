import React, { useRef } from 'react';
import MissionModel from '../models/missionModel';

interface Props {
    statuses: string[]
    prioritys: string[]
    newMission: any
    setMissions: (x: (missions: MissionModel[]) => MissionModel[]) => void;
}

function Add({ setMissions, statuses, prioritys, newMission }: Props) {

    const nameRef = useRef<HTMLInputElement>(null);
    const statusRef = useRef<HTMLSelectElement>(null);
    const priorityRef = useRef<HTMLSelectElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    const addMission = () => {
        const name = nameRef.current?.value;
        const status = statusRef.current?.value;
        const priority = priorityRef.current?.value;
        const description = descriptionRef.current?.value;

        if (name && status && priority && description) {
            newMission = new MissionModel(name, status, priority, description);
            try { 
                const request = {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(newMission)
                  };
                  fetch('https://reactexambackend.onrender.com/missions/8463488', request)
                      .then(response => response.json())
                      .then(data => setMissions(data));
                      // getData()
                  } catch (error) {
                    console.log("Can't post data", error)
                  } 
        } else {
            console.log("All fields are required");
        }
    };

    return (
        <div>
            <input type="text" placeholder="Enter Name" ref={nameRef} />
            <select ref={statusRef}>
                {statuses.map((status, index) => (
                    <option key={index} value={status}>
                        {status}
                    </option>
                ))}
            </select>
            <select ref={priorityRef}>
                {prioritys.map((priority, index) => (
                    <option key={index} value={priority}>
                        {priority}
                    </option>
                ))}
            </select>
            <input type="text" placeholder="Enter Description" ref={descriptionRef} />
            <button onClick={addMission}>Add Mission</button>
        </div>
    );
}

export default Add;
