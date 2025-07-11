import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const modalRef = useRef();
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
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption='Close'>
        <h2>Invalid Input</h2>
        <p>Masukkan Input dengan benar</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button
              className='text-sm text-stone-800 hover:text-stone-950'
              onClick={onCancel}>
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
    </>
  );
}
