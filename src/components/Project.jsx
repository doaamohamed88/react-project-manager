import React, { useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Project() {
  const [task, settask] = useState({ id: uuidv4(), text: "" });
  const { id } = useParams();
  const { projects, setprojects } = useOutletContext();
  const project = projects.find((e) => e.id === id);
  const navigate=useNavigate();
  function handleAddTask() {
    setprojects((prevProjects) =>
      prevProjects.map((p) =>
        p.id === id
          ? { ...p, tasks: [...p.tasks, task] } // add new task to THIS project
          : p
      )
    );

    // reset task input
    settask({ id: uuidv4(), text: "" });
  }
  function handleDelete(taskid) {
    const updatedtasks = project.tasks.filter((task) => task.id !== taskid);
    setprojects((prevProjects) =>
      prevProjects.map((p) =>
        p.id === id && p.tasks.find((task) => task.id == taskid)
          ? { ...p, tasks: updatedtasks } // add new task to THIS project
          : p
      )
    );
  }
  function handleDeleteProj() {
    setprojects((prevProjects) => prevProjects.filter((p) => p.id !== id));
    navigate("/")

  }

  return (
    <div className="p-11">
      <div className="flex justify-between">
        <h1 className="font-bold uppercase  from-neutral-700">
          {project.projecttitle}
        </h1>
        <button
          onClick={handleDeleteProj}
          className="bg-red-600 rounded-md p-2"
        >
          Delete
        </button>
      </div>
      <p className="text-gray-500 my-4">{project.projdate}</p>
      <p className="mb-4">{project.projdec}</p>
      <hr className=" border-1 border-black"></hr>
      <div>
        <h1 className="my-4">Tasks</h1>
        <div className="flex gap-3 mb-3">
          <input
            value={task.text}
            onChange={(e) => settask({ ...task, text: e.target.value })}
            className="bg-slate-300 p-1 rounded-md"
            type="text"
          ></input>
          <button
            onClick={handleAddTask}
            className="hover:bg-slate-600 p-1 rounded-md hover:text-white"
          >
            ADD
          </button>
        </div>
      </div>
      <ul className="bg-slate-300">
        {project.tasks.map((t) => (
          <div key={t.id} className="flex justify-between p-2 bg-slate-200">
            <li className="  my-1 rounded-md">{t.text}</li>
            <button onClick={() => handleDelete(t.id)}>Clear</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
