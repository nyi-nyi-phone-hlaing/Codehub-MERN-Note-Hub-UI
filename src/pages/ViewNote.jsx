import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ViewNote = () => {
  return (
    <div className='w-full h-full'>
      <header className='w-full h-14w-full h-14 px-5 flex items-center justify-between bg-zinc-900'>
        <div className='flex items-center gap-2'>
          <Link
            to='/'
            className='size-10 grid place-items-center font-semibold text-zinc-300'>
            <ArrowLeft size={23} />
          </Link>
          <h1 className='font-bold text-lg'>View Note</h1>
        </div>
      </header>
      <div className='p-3 w-full h-[calc(100%-3.5rem)] overflow-y-scroll'>
        <h1 className='font-bold text-lg mb-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className='text-zinc-200'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, massa
          nam ligula eu velit metus eleifend et congue, magnis pharetra luctus
          aptent purus litora vivamus.
        </p>
      </div>
    </div>
  );
};

export default ViewNote;
