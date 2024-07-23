import { json, Link, redirect, useLoaderData } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { ArrowLeft } from "lucide-react";
import { toastSuccess } from "../utils/toast";

const EditNote = () => {
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
          <h1 className='font-bold text-lg'>Edit your note</h1>
        </div>
      </header>
      <NoteForm isCreate={false} oldData={note} />
    </div>
  );
};

export default EditNote;

export const loader = async ({ params }) => {
  const response = await fetch(
    `${import.meta.env.VITE_API}/notes/${params.noteId}`
  );

  if (response.status === 409) {
    throw json({ message: "Note not found with this id" }, { status: 409 });
  }

  if (!response.ok) {
    throw json({ message: "Internal Server Error" }, { status: 500 });
  }

  const data = await response.json();
  return data.note;
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  const response = await fetch(
    `${import.meta.env.VITE_API}/edit-note/${params.noteId}`,
    {
      method: request.method,
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw json({ message: "Something Went Wrong" }, { status: 500 });
  }

  toastSuccess("Note Updated.");

  return redirect("/");
};
