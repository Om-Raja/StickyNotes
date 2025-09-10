import React from "react";
import { useSelector } from "react-redux";

function Note() {
  function capitalize(str){
    if(!str) return "";
    return str[0].toUpperCase() + str.slice(1);
  }

  const notes = useSelector((state) => state.notes.notes);
  return (
    <div className="mt-4 p-2">
      {notes.map((note) => (
        <div
          key={note._id}
          className="border m-3 rounded-md bg-[var(--color-surface)]"
        >
          <div className="mt-1">
          <div className="font-semibold text-lg">{capitalize(note.title)}</div>
          <span>{note.createdAt}</span>
          </div>
          <p className="mt-1 mb-2">{capitalize(note.content)}</p>

          <div className="flex flex-row justify-evenly mt-3 mb-2">
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out">View</button>
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out">Edit</button>
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out">Copy</button>
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out">Delete</button>
            <button className="bg-[var(--color-primary)] text-[var(--color-textdark)] px-2 py-1.5 rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transform hover:scale-110 transition-transform duration-200 ease-in-out">Share</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Note;
