import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="w-full flex flex-nowrap overflow-x-auto gap-5 h-[50%] py-5 mt-5 rounded-lg items-center justify-start"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
