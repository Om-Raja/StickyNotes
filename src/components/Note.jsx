import React from "react";
import { useSelector } from "react-redux";
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

  const notes = useSelector((state) => state.notes.notes);
  return (
    <div className="mt-4 p-2">
      {notes.map((note) => (
        <div
          key={note._id}
          className="border m-3 p-2 rounded-md bg-[var(--color-surface)]"
        >
          <div className="mt-1 flex flex-row justify-between">
            <div className="ml-4 font-semibold text-lg">
              {capitalize(note.title)}
            </div>
            <span className="mr-4">{format(note.createdAt, "dd MMM yy, hh:mm a")}</span>
          </div>
          <p className="mt-1 mb-2">{capitalize(note.content)}</p>

          <div className="flex flex-row justify-evenly mt-3 mb-2">
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out">
              <AiFillEye />
            </button>
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out">
              <AiFillEdit />
            </button>
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out">
              <IoIosCopy />
            </button>
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out">
              <MdDelete />
            </button>
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out">
              <FaShareAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Note;
