import { PencilIcon, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Note = () => {
  return (
    <div className='bg-zinc-900 aspect-square rounded-md overflow-hidden duration-200 border-2 border-zinc-900 hover:border-amber-500'>
      <Link to='/view-note/12345'>
        <div className='p-2 h-[calc(100%-2.5rem)] overflow-hidden'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque
            impedit quas nobis earum rem!
          </p>
        </div>
      </Link>
      <ul className='h-10 flex px-2 items-center justify-between border-t border-zinc-700 select-none'>
        <li>May 21, 2023</li>
        <div className='flex items-center gap-1'>
          <Link
            to='/delete'
            className='size-8 grid place-items-center rounded-full bg-zinc-800 text-red-800 '>
            <Trash2 size={16} fill='#ef4444' />
          </Link>
          <Link
            to='/edit-note/12345'
            className='size-8 grid place-items-center rounded-full bg-zinc-800 text-amber-800'>
            <PencilIcon size={16} fill='#f59e0b' />
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Note;
