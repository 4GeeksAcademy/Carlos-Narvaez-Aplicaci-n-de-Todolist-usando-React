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
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-4'></div>
        <div className='col-4'>

          <h1 className='text-center'>todos</h1>
          <div >
            <input type="text" value={task} onChange={add} onKeyDown={addLi} className="" placeholder="What needs to be done?" aria-label="Username" aria-describedby="addon-wrapping"/>
          </div>
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}
                <span onClick={()=>deleteLi(index)}>x</span>
              </li>
            ))}
          </ul>
          <p className='paper'>{list.length}</p>

        </div>
        <div className='col-4'></div>
      </div>
    </div>
  );
};

