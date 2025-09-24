import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddBtn({text}) {
     const navigate = useNavigate();
    function handleClick(){
        navigate("/details")
    }
  return (
    <>
    <button onClick={handleClick} className='text-center text-white rounded-lg p-3 bg-slate-700 max-w-fit '> {text} </button>
    </>
  )
}
