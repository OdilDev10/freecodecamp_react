import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Page404 } from "./pages/page404";
import { Quote_machine } from "./pages/quote_machine";
import MarkdownEditor from "./pages/page_markdown";
import { Layout } from "./components/Layout";
import { Drummachine } from "./pages/drum_machine";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/quote_machine" element={<Quote_machine />} />
            <Route path="/markdown_editor" element={<MarkdownEditor />} />
            <Route path="/drum_machine" element={<Drummachine />} />

            <Route path="*" element={<Page404 />} />
          </Route>
          {/* <Route path="/quote_machine" element={<Quote_machine />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
