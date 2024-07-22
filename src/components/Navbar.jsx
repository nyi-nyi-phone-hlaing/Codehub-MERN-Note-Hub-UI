import { LibraryBig, NotebookPen } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='w-full h-14 px-5 flex items-center justify-between bg-zinc-900'>
      <Link to='/'>
        <h1 className='font-bold text-xl select-none'>
          <span className='h-full bg-transparent px-1 rounded-sm text-white'>
            Note
          </span>
          <span className='h-full bg-amber-500 px-1 rounded-sm text-zinc-900'>
            Hub
          </span>
        </h1>
      </Link>

      <ul className='flex items-center gap-2'>
        <NavLink
          to='/'
          className='size-10 grid place-items-center font-semibold text-zinc-300'>
          <LibraryBig size={23} />
        </NavLink>
        <NavLink
          to='/create-note'
          className='size-10 grid place-items-center font-semibold  text-zinc-300'>
          <NotebookPen size={23} />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
