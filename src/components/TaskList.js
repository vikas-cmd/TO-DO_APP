import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask,  toggleTaskCompletion } from '../redux/taskSlice';


const TaskList = () => {
   
    console.log("List")
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const handleToggleTaskCompletion = (index) => {
    dispatch(toggleTaskCompletion(index));
  };
  const [editingTask, setEditingTask] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  

  const handleStartEditingTask = (index) => {
    setEditingTask(index);
    setEditedTaskText(tasks[index].text);
  };

  const handleSaveEditedTask = () => {
    if (editedTaskText.trim() !== "") {
      dispatch(editTask({ index: editingTask, text: editedTaskText }));
      setEditingTask(null);
    }
}

  return (
    
    <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between px-4 py-2 rounded-md ${
                task.completed
                  ? "bg-gray-200 line-through text-gray-500"
                  : "bg-white"
              }`
            }
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTaskCompletion(index)}
                  className="mr-2"
                />
                {editingTask === index ? (
                  <input
                    type="text"
                    value={editedTaskText}
                    onChange={(e) => setEditedTaskText(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSaveEditedTask();
                      }
                    }}
                    className="flex-1 border-gray-300 border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <span className="flex-1">{task.text}</span>
                )}
              </div>
              <div className="flex gap-2">
                {editingTask === index ? (
                  <>
                    <button
                      onClick={handleSaveEditedTask}
                      className="text-green-500 hover:text-green-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingTask(null)}
                      className="text-gray-500 hover:text-gray-600"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleStartEditingTask(index)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(index)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
        
  );

};

export default TaskList;
