import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
// import marked from 'marked';
import "./markdown.css";

function MarkdownEditor() {
  const [markdownText, setMarkdownText] = useState("");
  const [modoOscuro, setModoOscuro] = useState(false);

  const handleInputChange = (e) => {
    setMarkdownText(e.target.value);
  };

  useEffect(() => {}, [modoOscuro]);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#87b5b5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "400px",
          border: "solid 1px #000",
          borderRadius: "10px",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            height: "20%",
            background: "#fff",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h2>Escribe tu Markdown aquí...</h2>
        </div>
        <textarea
          value={markdownText}
          onChange={handleInputChange}
          placeholder="Escribe tu Markdown aquí..."
          rows="10"
          style={{
            width: "100%",
            height: "80%",
            fontSize: "2rem",
          }}
        />
      </div>
      <div
        style={{
          width: "80%",
          minHeight: "400px",
          border: "solid 1px #000",
          borderRadius: "10px 10px 0px 0px",
          marginTop: "15px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "#fff",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h2>Vista previa:</h2>
        </div>
        <div
          style={{
            fontSize: "2rem",
            color: "#333",
            padding: "10px",
            width: "90%",
            margin: "auto",
          }}
        >
          <ReactMarkdown children={markdownText} />
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;
