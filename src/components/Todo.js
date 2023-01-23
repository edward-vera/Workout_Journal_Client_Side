import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Todo = () => {
    const [todos, setTodos] = useState ([]);

    useEffect(() => {
        axios.get("http://workout-journal-server.vercel.app/todos", 
        ).then((response) => {
          setTodos(response.data)})
      }, []);

  return (
    <div>
        <ul className='list'>
            {!todos.length ? (
                <p>Loading Workouts...</p>
            ) : (
            todos.map(({id, todo, user_id}) => {
                return <li className='item' key={id}>{todo}</li>
            })
        )}    
        </ul>     
    </div>
  )
}