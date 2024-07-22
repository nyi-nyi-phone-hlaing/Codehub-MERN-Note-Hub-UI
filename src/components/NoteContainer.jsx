import Note from "./Note";

const NoteContainer = () => {
  return (
    <div className='w-full gap-3 p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 '>
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default NoteContainer;
