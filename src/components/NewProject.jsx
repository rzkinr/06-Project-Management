import { useRef } from "react";
import Input from "./Input.jsx";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() == "" ||
      enteredDescription.trim() == "" ||
      enteredDueDate.trim() == ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-sm text-stone-800 hover:text-stone-950'>
            Cancel
          </button>
        </li>
        <li>
          <button
            className='bg-stone-800 text-stone-50 py-1 px-4 rounded-md hover:bg-stone-500'
            onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type='text' ref={title} label='Title' />
        <Input ref={description} label='Description' textarea />
        <Input type='date' ref={dueDate} label='Due date' />
      </div>
    </div>
  );
}
