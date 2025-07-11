import Input from "./Input.jsx";

export default function NewProject() {
  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-sm text-stone-800 hover:text-stone-950'>
            Cancel
          </button>
        </li>
        <li>
          <button className='bg-stone-800 text-stone-50 py-1 px-4 rounded-md hover:bg-stone-500'>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label='Title' />
        <Input label='Description' textarea />
        <Input label='Due date' />
      </div>
    </div>
  );
}
