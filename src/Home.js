import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from './components/TaskList';

export default function Home() {
   


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <TaskInput />
        <TaskList />
        
        
        
      </div>
    </div>
  );
}
