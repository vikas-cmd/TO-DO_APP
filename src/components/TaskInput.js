import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';


const TaskInput = () => {
  const dispatch = useDispatch();
  //const [taskName, setTaskName] = useState('');
  const [newTask, setNewTask] = useState("");

  
  //handleOnChangle Input
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };
  
  //handle add button
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch(addTask(newTask));
      setNewTask("");
    }
  };

  return (
    
     <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            className="flex-1 border-gray-300 border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-r-md px-4 py-2"
          >
            Add
          </button>
        </div>
  );
};

export default TaskInput;
