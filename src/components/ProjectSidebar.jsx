export default function ProjectSideBar({ project, onSelect }) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-lg'>Your Projects</h2>
      <div>
        <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-50 transition-colors duration-200'>
          + Add project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
