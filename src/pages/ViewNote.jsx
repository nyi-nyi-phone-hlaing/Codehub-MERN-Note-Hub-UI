import { ArrowLeft, Clock, User } from "lucide-react";
import TimeAgo from "../components/TimeAgo";
import { json, Link, useLoaderData } from "react-router-dom";

const ViewNote = () => {
  const note = useLoaderData();
  return (
    <div className='w-full h-full'>
      <header className='w-full h-14w-full h-14 px-5 flex items-center justify-between bg-zinc-900'>
        <div className='flex items-center gap-2'>
          <Link
            to='/'
            className='size-10 grid place-items-center font-semibold text-zinc-300'>
            <ArrowLeft size={23} />
          </Link>
          <div className='bg-zinc-800 px-2 py-1.5 gap-2 flex items-center rounded-md'>
            <User size={25} />
            <h1 className='font-bold text-lg'>{note.author}</h1>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Clock size={20} />
          <TimeAgo date={note.createdAt} />
        </div>
      </header>
      <div className='p-3 w-full h-[calc(100%-3.5rem)] overflow-y-scroll'>
        <h1 className='font-bold text-lg mb-2'>{note.title}</h1>
        <p className='text-zinc-200'>{note.content}</p>
      </div>
    </div>
  );
};

export default ViewNote;

export const loader = async ({ params }) => {
  const response = await fetch(
    `${import.meta.env.VITE_API}/notes/${params.noteId}`
  );

  if (response.status === 409) {
    throw json({ message: "Note note found with this id" }, { status: 409 });
  }

  if (!response) {
    throw json({ message: "Internal Server Error" }, { status: 500 });
  }

  const data = await response.json();
  return data.note;
};
