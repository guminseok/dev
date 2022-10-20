import { useEditor, EditorContent } from "@tiptap/react";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { useEffect, useState } from "react";
import TextAlign from "@tiptap/extension-text-align";
import { MenuBar } from "./MenuBar";
import HTMLEditor from "../../components/tiptap/HTMLEditor";
import { useStore } from "../../store";

const Tiptap = () => {
  const [ttContent, setTTContent] = useState("");
  const [showHTML, setShowHTML] = useState(false);

  const label = showHTML ? "kiji" : "HTML";

  const sampleContent = useStore((state) => state.content);
  console.log("sampleContent", sampleContent);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: sampleContent,
    onUpdate: ({ editor }) => {
      // const json = editor.getJSON();
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
    // updatePostContent(ttContent);
  }, [ttContent]);

  return (
    <div className="flex-col w-full h-full bg-yellow-000 shadow-lg">
      {/* <div>{post.content}</div> */}

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
        <HTMLEditor />
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

const MenuBox = ({ child }) => {
  return <div className="border-solid border-2 w-full" children={child}></div>;
};

const EditBox = () => {
  return <div className="border-solid border-2 w-full"> Editor Content </div>;
};
