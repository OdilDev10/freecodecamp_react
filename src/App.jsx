import { BrowserRouter, Route,  Routes } from "react-router-dom";
import "./App.css";
import { Page404 } from "./pages/page404";
import { Quote_machine } from "./pages/quote_machine";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/quote_machine" element={<Quote_machine />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
