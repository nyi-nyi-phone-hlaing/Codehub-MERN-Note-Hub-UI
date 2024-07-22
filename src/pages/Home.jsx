import NoteContainer from "../components/NoteContainer";

const Home = () => {
  return (
    <section className='w-full h-full overflow-y-scroll'>
      <h1 className='font-bold px-3 text-2xl text-amber-500'>My Notes</h1>
      <NoteContainer />
    </section>
  );
};

export default Home;
