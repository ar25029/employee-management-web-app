import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl bg-blue-300 px-9 py-6 w-[22%]">
        <h1 className="text-2xl font-bold">{data.taskCount.newTask}</h1>
        <h3 className="text-2xl">New Task</h3>
      </div>
      <div className="rounded-xl bg-green-300 px-9 py-6 w-[22%]">
        <h1 className="text-2xl font-bold">{data.taskCount.active}</h1>
        <h3 className="text-2xl">Accepted Task</h3>
      </div>
      <div className="rounded-xl bg-purple-300 px-9 py-6 w-[22%]">
        <h1 className="text-2xl font-bold">{data.taskCount.completed}</h1>
        <h3 className="text-2xl">Complete Task</h3>
      </div>
      <div className="rounded-xl bg-red-300 px-9 py-6 w-[22%]">
        <h1 className="text-2xl font-bold">{data.taskCount.failed}</h1>
        <h3 className="text-2xl">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
