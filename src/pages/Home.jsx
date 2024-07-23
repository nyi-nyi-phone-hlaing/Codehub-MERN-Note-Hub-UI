import NoteContainer from "../components/NoteContainer";
import { json, useLoaderData } from "react-router-dom";

const Home = () => {
  const notes = useLoaderData();

  return (
    <section className='w-full h-full overflow-y-scroll'>
      <h1 className='font-bold px-3 text-2xl text-amber-500'>My Notes</h1>
      <NoteContainer notes={notes} />
    </section>
  );
};

export default Home;

export const loader = async () => {
  const response = await fetch(`${import.meta.env.VITE_API}/notes`);
  if (!response) {
    throw json({ message: "Internal Server Error" }, { status: 500 });
  }
  const data = await response.json();
  return data.notes;
};
