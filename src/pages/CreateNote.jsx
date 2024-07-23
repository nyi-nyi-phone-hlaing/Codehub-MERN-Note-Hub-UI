import { json, Link, redirect } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { ArrowLeft } from "lucide-react";
import { toastSuccess } from "../utils/toast";

const CreateNote = () => {
  return (
    <div className='w-full h-full'>
      <header className='w-full h-14w-full h-14 px-5 flex items-center justify-between bg-zinc-900'>
        <div className='flex items-center gap-2'>
          <Link
            to='/'
            className='size-10 grid place-items-center font-semibold text-zinc-300'>
            <ArrowLeft size={23} />
          </Link>
          <h1 className='font-bold text-lg'>Create a new note</h1>
        </div>
      </header>
      <NoteForm isCreate={true} />
    </div>
  );
};

export default CreateNote;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  const response = await fetch(`${import.meta.env.VITE_API}/create-note`, {
    method: request.method,
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw json({ message: "Something Went Wrong" }, { status: 500 });
  }

  toastSuccess("Note created.");

  return redirect("/");
};
