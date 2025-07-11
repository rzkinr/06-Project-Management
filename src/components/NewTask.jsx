import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleSubmit(event) {
    if (enteredTask.trim() === "") {
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className='flex items-center gap-4'>
      <input
        type='text'
        className='w-64 px-2 py-1 rounded-sm'
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className=' text-stone-700 hover:text-stone-950 px-4 py-1 rounded-sm'
        onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
}
