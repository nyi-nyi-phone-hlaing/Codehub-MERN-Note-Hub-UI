import { PencilIcon, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import TimeAgo from "./TimeAgo";
import { toastSuccess } from "../utils/toast";

const Note = ({ note }) => {
  const { _id, content, createdAt } = note;
  const navigate = useNavigate();
  const deleteNoteHandler = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API}/delete-note/${_id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 200) {
      toastSuccess("Note Deleted.");
      navigate("/");
    }
  };

  return (
    <div className='bg-zinc-900 aspect-square rounded-md overflow-hidden duration-200 border-2 border-zinc-900 hover:border-amber-500'>
      <Link to={`/view-note/${_id}`}>
        <div className='p-2 h-[calc(100%-2.5rem)] overflow-hidden'>
          <p>
            {content.length > 80 ? content.substring(0, 80) + "..." : content}
          </p>
        </div>
      </Link>
      <ul className='h-10 flex px-2 items-center justify-between border-t border-zinc-700 select-none'>
        <TimeAgo date={createdAt} className='text-zinc-300' />
        <div className='flex items-center gap-1'>
          <button
            onClick={deleteNoteHandler}
            className='size-8 grid place-items-center rounded-full bg-zinc-800 text-red-800 '>
            <Trash2 size={16} fill='#ef4444' />
          </button>
          <Link
            to={`/edit-note/${_id}`}
            className='size-8 grid place-items-center rounded-full bg-zinc-800 text-amber-800'>
            <PencilIcon size={16} fill='#f59e0b' />
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Note;
