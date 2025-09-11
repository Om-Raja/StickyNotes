import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addNote, updateNote } from "../redux/notesSlice";

function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [params, setParams] = useSearchParams();
  const noteId = params.get("noteId");
  const dispatch = useDispatch();
  const allNotes = useSelector((state) => state.notes.notes);

  useEffect(() => {
    if (noteId) {
      const currentNote = allNotes.find((note) => note._id === noteId);
      setTitle(currentNote?.title);
      setContent(currentNote?.content);
    }
  }, [noteId]);

  function handleClick() {
    const note = {
      title,
      content,
      _id: noteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (noteId) dispatch(updateNote(note));
    else dispatch(addNote(note));

    //after creation or updation
    setTitle("");
    setContent("");
    setParams({});
  }

  // setNotes(localStorage.getItem("notes"));
  return (
    <div className="flex flex-col justify-center content-center mt-4">
      <input
        type="text"
        placeholder="Enter title here"
        className="p-3 rounded-xl bg-[var(--color-surface)]"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        className="bg-[var(--color-surface)] mt-4 rounded-xl p-3 h-32 md:h-32 lg:h-52"
        placeholder="Write your content here..."
        value={content}
        onChange={(event) => setContent(event.target.value)}
      ></textarea>

      <button
        onClick={handleClick}
        className="bg-[var(--color-primary)] text-[var(--color-textdark)] w-0.5s rounded-lg p-2 mt-[57vh] md:mt-8 lg:mt-3"
      >
        {noteId ? "Update the note" : "Create note"}
      </button>
    </div>
  );
}

export default Home;
