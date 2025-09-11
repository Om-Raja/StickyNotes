import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeNote} from "../redux/notesSlice.js"
import {Link} from "react-router-dom"
import toast from "react-hot-toast";
import { format } from "date-fns";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { IoIosCopy } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";

function Note() {
  const dispatch = useDispatch();

  function capitalize(str) {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1);
  }

  function handleCopy(text) {
    //returns a promise
    navigator.clipboard.writeText(text).then(() => toast.success("Copied")).catch((err)=>{
      toast.error(`Couldn't copy because ${err}`);
    });
  }

  function handleDelete(_id, title){
    dispatch(removeNote({_id, title}));
  }

  const notes = useSelector((state) => state.notes.notes);
  return (
    <div className="mt-4 md:p-2">
      {notes.map((note) => (
        <div
          key={note._id}
          className="border m-3 p-2 rounded-md bg-[var(--color-surface)]"
        >

          {/* ---- title and date ---- */}
          <div className="mt-1 flex flex-row justify-between">
            <div className="md:ml-4 ml-1 mb-2 md:mb-1 font-semibold text-lg">
              {capitalize(note.title)}
            </div>
            <span className="md:mr-4 mr-1 text-[var(--color-secondary)] text-xs md:text-[1rem]">
              {format(note.createdAt, "dd MMM yy, hh:mm a")}
            </span>
          </div>

          {/* ---- content ----  */}
          <p className="mt-1 mb-2">{note.content}</p>


          {/* ---- buttons ---- */}
          <div className="flex flex-row justify-evenly mt-3 mb-2">
            {/* view */}
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer">
              <AiFillEye />
            </button>

            {/* Edit */}
            <Link to={`/?noteId=${note._id}`} className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer">
              <AiFillEdit />
            </Link>

            {/*copy */}
            <button
              className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer"
              onClick={() => handleCopy(note.content)}
            >
              <IoIosCopy />
            </button>

            {/*Delete */}
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer" onClick={()=>{handleDelete(note._id, note.title)}}>
              <MdDelete />
            </button>

            {/*Share */}
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer">
              <FaShareAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Note;
