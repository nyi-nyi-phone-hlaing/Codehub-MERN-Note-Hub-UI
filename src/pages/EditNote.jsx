import { Link } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { ArrowLeft } from "lucide-react";

const EditNote = () => {
  return (
    <div className='w-full h-full'>
      <header className='w-full h-14w-full h-14 px-5 flex items-center justify-between bg-zinc-900'>
        <div className='flex items-center gap-2'>
          <Link
            to='/'
            className='size-10 grid place-items-center font-semibold text-zinc-300'>
            <ArrowLeft size={23} />
          </Link>
          <h1 className='font-bold text-lg'>Edit your note</h1>
        </div>
      </header>
      <NoteForm isCreate={false} />
    </div>
  );
};

export default EditNote;
