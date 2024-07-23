import NoteContainer from "../components/NoteContainer";
import { json, useLoaderData } from "react-router-dom";

const Home = () => {
  const notes = useLoaderData();

  return (
    <section className='w-full h-full overflow-y-scroll'>
      <h1 className='font-bold px-3 text-2xl text-amber-500'>My Notes</h1>
      {notes.length ? (
        <NoteContainer notes={notes} />
      ) : (
        <div className='w-full h-full grid place-items-center'>
          <p className='text-zinc-400 font-semibold'>No notes found</p>
        </div>
      )}
    </section>
  );
};

export default Home;

export const loader = async () => {
  const response = await fetch(`${import.meta.env.VITE_API}/notes`);
  if (!response.ok) {
    throw json({ message: "Internal Server Error" }, { status: 500 });
  }
  const data = await response.json();
  return data.notes;
};
