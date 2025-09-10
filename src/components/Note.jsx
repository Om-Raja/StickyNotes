import React from "react";
import { useSelector } from "react-redux";

function Note() {
  const notes = useSelector((state) => state.notes.notes);
  return (
    <div className="mt-4 p-2">
      {notes.map((note) => (
        <div key={note._id} className="border mt-2 rounded-md bg-[var(--color-surface)]">
          <div className="mb-1 font-semibold text-lg">{note.title}</div>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Note;
