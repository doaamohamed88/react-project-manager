import React from "react";
import AddBtn from "../utils/AddBtn";
import { Link, useOutletContext } from "react-router-dom";

export default function Sidebar({ projects }) {
  return (
    <>
      <div className="p-5 min-h-screen bg-slate-900 rounded-md flex flex-col items-center ">
        <h2 className="text-center p-12  text-white"> YOUR PROJECTS</h2>
        <div className="flex justify-center">
          <AddBtn text="+ Add Projects"></AddBtn>
        </div>
        {projects.map((proj) => (
          <Link
            key={proj.id}
            to={`/project/${proj.id}`}
            className="text-center text-white rounded-lg p-3 bg-slate-700 max-w-fit mt-3 block"
          >
            {proj.projecttitle}
          </Link>
        ))}
      </div>
    </>
  );
}
