import NewTask from "./NewTask.jsx";
export default function Tasks({ task, onAdd, onDelete }) {
  return (
    <section>
      <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
      <NewTask onAdd={onAdd} />
      {task.length === 0 && (
        <p className='text-stone-800 mb-4'>
          This project does not have any tasks yet.
        </p>
      )}
      {task.length > 0 && (
        <ul className='p-4 mt-8 rounded-md bg-stone-100'>
          {task.map((task) => (
            <li key={task.id} className='border-b border-stone-300 py-2'>
              <span className='text-stone-600'>{task.text}</span>
              <button
                className='text-red-600 hover:text-red-800 ml-4'
                onClick={() => onDelete(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
