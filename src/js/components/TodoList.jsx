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
        <div className='col-3'></div>
        <div className='col-6'>

          <h1 >todos</h1>
          <div >
            <input type="text" value={task} onChange={add} onKeyDown={addLi} className="ps-5" placeholder="What needs to be done?" aria-label="Username" aria-describedby="addon-wrapping"/>
          </div>
          <ul>
            {list.map((item, index) => (
              <li className='ps-5 d-flex justify-content-between align-items-center' key={index}>{item}
                <span className='text-end' onClick={()=>deleteLi(index)}>X</span>
              </li>
            ))}
          </ul>
          <p className='paper'>{list.length} item left</p>

        </div>
        <div className='col-3'></div>
      </div>
    </div>
  );
};

