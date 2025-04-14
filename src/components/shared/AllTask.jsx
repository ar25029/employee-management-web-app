import React, { useContext } from "react";

const AllTask = () => {
  const empData = JSON.parse(localStorage.getItem("employees"));
  console.log(empData);

  return (
    <div id="allTaskList" className="mt-4 rounded bg-[#1c1c1c] p-3 h-40">
      <div className="bg-red-300 text-center py-2 px-4 flex items-center justify-between rounded mb-2">
        <h2 className="w-1/2 bg-red-600">Employee</h2>
        <h3 className="w-1/2 bg-red-600">New Task</h3>
        <h5 className="w-1/2 bg-red-600">Active Task</h5>
        <h5 className="w-1/2 bg-red-600">Completed</h5>
        <h5 className="w-1/2 bg-red-600">Failed</h5>
      </div>
      <div id="allTask" className="h-[80%] overflow-auto">
        {empData.map((emp) => {
          return (
            <div
              key={emp.id}
              className="bg-red-300 text-center py-2 px-4 flex items-center justify-between rounded mb-2"
            >
              <h2 className="w-1/2 text-white">{emp.name}</h2>
              <h3 className="w-1/2 text-blue-400">{emp.taskCount.newTask}</h3>
              <h5 className="w-1/2 text-gray-400">{emp.taskCount.active}</h5>
              <h5 className="w-1/2 text-green-400">
                {emp.taskCount.completed}
              </h5>
              <h5 className="w-1/2 text-red-600">{emp.taskCount.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
