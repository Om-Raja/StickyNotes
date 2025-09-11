import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeNote, resetAllNotes } from "../redux/notesSlice.js";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { IoIosCopy } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

function Note() {
  const dispatch = useDispatch();

  function capitalize(str) {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1);
  }

  function handleCopy(text) {
    //returns a promise
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success("Copied"))
      .catch((err) => {
        toast.error(`Couldn't copy because ${err}`);
      });
  }

  function handleDelete(_id, title) {
    dispatch(removeNote({ _id, title }));
  }
  function handleDeleteAll() {
    dispatch(resetAllNotes());
  }

  const notes = useSelector((state) => state.notes.notes);

  //UI when list is empty
  if (!notes.length) {
    return (
      <div
        className={
          "text-4xl md:text-6xl text-[var(--color-surface)] mt-[15%] flex flex-col gap-8 justify-center content-center"
        }
      >
        <CgNotes
          className={
            "absolute text-9xl transform rotate-8 left-[34vw] sm:left-[45.5vw] top-[42vh] sm:top-[16vh]"
          }
        />
        <p>Your notes will appear here.</p>
        <p>Add some...</p>

        <Link
          to="/"
          className="bg-[var(--color-primary)] text-[var(--color-textdark)] w-0.5s rounded-lg p-3 mt-[50vh] md:mt-6 lg:mt-6 text-[1rem] sm:w-[50%] sm:ml-[24%]"
        >
          Add a note
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-4 md:p-2">
      <button
        className={
          "bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-103 transition-transform duration-200 ease-in-out cursor-pointer relative left-[34%] md:left-[45.6%] sm:left-[42%]"
        }
        onClick={handleDeleteAll}
      >
        Delete all
      </button>
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
            <Link
              to={`/?noteId=${note._id}`}
              className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer"
            >
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
            <button
              className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer"
              onClick={() => {
                handleDelete(note._id, note.title);
              }}
            >
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
