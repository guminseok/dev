/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEditor, EditorContent } from "@tiptap/react";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import React, { memo } from "react";
import { useEffect, useState } from "react";
import TextAlign from "@tiptap/extension-text-align";
import { MenuBar } from "./MenuBar";
import { useKijiStore } from "../../utils/updateStore";

const Tiptap = () => {
  const storePost = useKijiStore((state) => state.post);
  const setContent = useKijiStore((state) => state.setContent);
  const setTitle = useKijiStore((state) => state.setTitle);
  const [ttContent, setTTContent] = useState(storePost.content);
  const [ttTitle, setTTTitle] = useState(storePost.title);
  const [showHTML, setShowHTML] = useState(false);

  const label = showHTML ? "kiji" : "HTML";

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: ttContent,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setTTContent(html);
    },
    editorProps: {
      attributes: {
        // class:
        //   "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none bg-blue-200",
      },
    },
  });

  // const htmlE = editor.getHTML();

  const addImage = () => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  useEffect(() => {
    setContent(ttContent);
  }, [ttContent]);
  useEffect(() => {
    if (editor !== null && editor.commands !== null) {
      editor.commands.setContent(ttContent);
    }
  }, [showHTML]);
  useEffect(() => {
    setTitle(ttTitle);
  }, [ttTitle]);

  const HTMLEditor = memo(() => {
    return (
      <div className="flex-col w-full h-full bg-yellow-000">
        <div className={editorBoxClass}>
          {/* <div className="EditorMirror"> */}
          <form
            className=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <textarea
              className="EditorMirror"
              onChange={(e) => {
                setTTContent(e.target.value);
              }}
              value={ttContent}
            />
          </form>
          {/* </div> */}
        </div>
      </div>
    );
  });

  return (
    <div className="flex-col w-full h-full bg-yellow-000 shadow-lg">
      {/* <div>{post.content}</div> */}

      <div className="flex justify-end">
        <input
          autoFocus
          onChange={(e) => setTTTitle(e.target.value)}
          placeholder="タイトルを追加"
          type="text"
          value={ttTitle}
          className="w-full h-10 border-2 border-black rounded mb-4"
        />
      </div>
      <div className="bg-orange-300 flex justify-end">
        <button
          className="border-solid border-black border-2 px-2"
          onClick={() => setShowHTML(!showHTML)}
        >
          {label}
        </button>
      </div>
      <MenuBar editor={editor} />

      {/* <MenuBar editor={editor} /> */}
      {/* <button onClick={addImage}>Image URL</button> */}
      {/* <EditorContent className={editorBoxClass} editor={editor} /> */}

      {showHTML ? (
        <HTMLEditor key={"HTMLEditor"} />
      ) : (
        <EditorContent className={editorBoxClass} editor={editor} />
      )}

      {/* <HTMLEditor />  */}
    </div>
  );
};

export default Tiptap;

const test_content = `
<p>Hello World! 🌎️</p>
<img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
<img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />
`;

const editorBoxClass =
  "border-solid border-2 border-black min-h-full opacity-50  mb-4";
