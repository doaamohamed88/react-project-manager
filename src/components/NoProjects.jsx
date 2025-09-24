import React from "react";
import img from "../assets/no-projects.png";
import AddBtn from "../utils/AddBtn";
export default function NoProjects() {
  return (
    <div className="flex flex-col gap-3 w-full h-full  justify-center items-center">
      <img src={img} className="w-10" />
      <h2> No Project Selected</h2>
      <p> select a project or get started with a new one</p>
      <AddBtn text="Create new project" />
    </div>
  );
}
