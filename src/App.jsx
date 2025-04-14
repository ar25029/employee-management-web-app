import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import NotFound from "./pages/NotFound";
import { data } from "autoprefixer";

export default function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(loggedInUser.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      const admin = authData.admin[0];
      setLoggedInUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin })
      );
    } else if (authData) {
      const employee = authData.employees.find(
        (emp) => emp.email === email && emp.password === password
      );
      if (employee) {
        setLoggedInUserData(employee);
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      console.error("Invalid credentials!");
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
}
