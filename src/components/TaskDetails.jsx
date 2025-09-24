import React, { useState } from "react";
import Input from "../utils/Input";
import { useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function TaskDetails() {
  const { projects, setprojects } = useOutletContext();
  const [project, setproject] = useState({
    id: uuidv4(),
    projecttitle: "",
    projdec: "",
    projdate: "",
    tasks:[]
  });

  function handleChange(e) {
    console.log(e);
    setproject({ ...project, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop page refresh
    setprojects((prev) => [...prev, project]);
    setproject({ projecttitle: "", projdec: "", projdate: "" });
    console.log(projects);
  }
  function handleCancel() {
    setproject({ projecttitle: "", projdec: "", projdate: "" });
  }
  return (
    <form className=" flex flex-col max-w-lg p-4 mt-32 pl-10 ">
      <Input
        type="text"
        text="title"
        value={project.projecttitle}
        name="projecttitle"
        onChange={handleChange}
      />
      <Input
        textarea="textarea"
        text="Description"
        value={project.projdec}
        name="projdec"
        onChange={handleChange}
      />
      <Input
        type="date"
        text="Due Date"
        value={project.projdate}
        name="projdate"
        onChange={handleChange}
      />
      <div className="flex justify-end gap-4 mt-3">
        <button onClick={handleCancel}>Cancel</button>
        <button
          className="bg-slate-500 p-2 px-4 text-white rounded-md"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </form>
  );
}
