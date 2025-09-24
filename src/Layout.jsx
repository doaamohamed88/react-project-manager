import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [projects, setprojects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);
  return (
    <div className="flex">
      <Sidebar projects={projects} />
      <div className="flex-1 p-4 ">
        <Outlet context={{ projects, setprojects }} />
      </div>
    </div>
  );
}
