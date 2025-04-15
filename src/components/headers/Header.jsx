import React, { useState } from "react";

const Header = ({ data, changeUser }) => {
  const handleLogout = () => {
    changeUser("");
    loggedInUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-white text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-4xl font-semibold">{data.name} 👋🏼</span>
      </h1>
      <button
        onClick={() => handleLogout()}
        className="text-white text-lg font-medium bg-red-600 px-4 py-2 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
