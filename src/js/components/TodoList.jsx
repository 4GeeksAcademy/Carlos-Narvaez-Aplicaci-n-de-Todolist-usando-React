import React, { useState } from 'react';

export const TodoList = () => {

  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const add = (event) => {
    setTask(event.target.value)
  };

  const addLi = (event) => {
    if (event.key==='Enter' && task.trim() !== "") {
      setList([...list, task])
      setTask("") 
    }
  };

  const deleteLi = (paramIndex) => {
    let element = list.filter((item, index) => index!=paramIndex)
    setList(element)
  };

  return (
    <div className='text-center'>
      <h1>todos</h1>
      <div class="input-group flex-nowrap">
        <input type="text" value={task} onChange={add} onKeyDown={addLi} className="form-control" placeholder="What needs to be done?" aria-label="Username" aria-describedby="addon-wrapping"/>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}
            <button onClick={()=>deleteLi(index)}>x</button>
          </li>
        ))}
      </ul>
      <p>{list.length}</p>
    </div>
  );
};

