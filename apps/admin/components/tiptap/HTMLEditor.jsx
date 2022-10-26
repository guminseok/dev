import React from "react";
import { useEffect, useState } from "react";
const Tiptap = () => {
  const [ttContent, setTTContent] = useState("");
  const [content, setContent] = useState("");

  // console.log("postState E", post.content);

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { title, content, user: "them" };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // await router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-col w-full h-full bg-yellow-000">
      <div className={editorBoxClass}>
        {/* <div className="EditorMirror"> */}
        <form className="" onSubmit={submitData}>
          <textarea
            className="EditorMirror"
            // cols={50}
            onChange={(e) => {
              setContent(e.target.value);
              // if (globalContext != null) {
              // globalContext.content = e.target.value;
              // }
            }}
            placeholder="Content"
            // rows={8}
            value={content}
          />
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Tiptap;

const editorBoxClass =
  "border-solid border-2 border-black min-h-full opacity-50  mb-4";

const EditBox = () => {
  return <div className="border-solid border-2 w-full"> Editor Content </div>;
};
