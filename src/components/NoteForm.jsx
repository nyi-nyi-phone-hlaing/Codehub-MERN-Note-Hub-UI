const NoteForm = ({ isCreate }) => {
  console.log(isCreate);
  return (
    <form action='' className='w-full h-[calc(100%-3.5rem)] '>
      <div className='w-full h-14 flex items-center justify-between'>
        <p className='text-zinc-500 font-normal'>Characters - 0</p>
        <button className='font-bold px-2 py-1 text-zinc-900 bg-amber-500 rounded-sm'>
          {isCreate ? "Save" : "Save Change"}
        </button>
      </div>
      <div className='w-full h-14'>
        <input
          type='text'
          name='title'
          placeholder='Title'
          className='w-full h-full px-3 font-bold bg-transparent border-none outline-none'
        />
      </div>
      <div className='w-full h-[calc(100%-7rem)]'>
        <textarea
          name='description'
          placeholder='What in your mind...'
          className='w-full h-full px-3 pb-5 bg-transparent border-none outline-none resize-none'></textarea>
      </div>
    </form>
  );
};

export default NoteForm;
