import Button from "./Button.jsx";

export default function ProjectSideBar({ onStartProject, projects }) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-lg'>Your Projects</h2>
      <div>
        <Button onClick={onStartProject}>+ Add project</Button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => (
          <li key={project.id}>
            <button className='w-full text-left px-1 py-2 rounded-sm my-1 text-stone-400 hover:bg-stone-800 hover:text-stone-50 transition-colors duration-200'>
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
