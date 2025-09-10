import React from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { IoIosCopy } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";

function Note() {
  function capitalize(str) {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1);
  }

  function handleCopy(text) {
    //returns a promise
    navigator.clipboard.writeText(text).then(() => toast.success("Copied"));
  }

  const notes = useSelector((state) => state.notes.notes);
  return (
    <div className="mt-4 p-2">
      {notes.map((note) => (
        <div
          key={note._id}
          className="border m-3 p-2 rounded-md bg-[var(--color-surface)]"
        >

          {/* ---- title and date ---- */}
          <div className="mt-1 flex flex-row justify-between">
            <div className="md:ml-4 sm:ml-1 font-semibold text-lg">
              {capitalize(note.title)}
            </div>
            <span className="md:mr-4 sm:mr-1 text-[var(--color-secondary)]">
              {format(note.createdAt, "dd MMM yy, hh:mm a")}
            </span>
          </div>

          {/* ---- content ----  */}
          <p className="mt-1 mb-2">{capitalize(note.content)}</p>


          {/* ---- buttons ---- */}
          <div className="flex flex-row justify-evenly mt-3 mb-2">
            {/* view */}
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer">
              <AiFillEye />
            </button>

            {/* Edit */}
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer">
              <AiFillEdit />
            </button>

            {/*copy */}
            <button
              className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer"
              onClick={() => handleCopy(capitalize(note.content))}
            >
              <IoIosCopy />
            </button>

            {/*Delete */}
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer">
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
