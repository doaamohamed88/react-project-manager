import React from "react";

export default function Input({ text, type, textarea ,name ,value , onChange }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="flex flex-col mb-2 gap-2">
      <label>{text}</label>
      <Tag type={type} className="rounded-md bg-slate-300 p-2" name={name} value={value} onChange={(e)=>onChange(e)}  />
    </div>
  );
}
