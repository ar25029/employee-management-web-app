import React from "react";
import Header from "../headers/Header";
import CreateTask from "../shared/CreateTask";
import AllTask from "../shared/AllTask";

const AdminDashboard = ({ data }) => {
  return (
    <div className="h-screen w-full p-10">
      <Header data={data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
