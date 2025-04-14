import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="w-full flex flex-nowrap gap-5 overflow-x-auto h-[50%] py-5 mt-5 rounded-lg items-center justify-start"
    >
      <div className="h-full w-[250px] rounded-xl bg-red-300 flex-shrink-0"></div>
    </div>
  );
};

export default TaskList;
