// import Sidebar from 'components/__sidebar__/Sidebar';
// import Main from 'components/__main__/Main';
// import RichTextEditor from '../components/__deck__/FlashcardEditor';

import { HashRouter, Route, Routes } from 'react-router-dom';

import DeckEditor from 'components/__deck__/DeckEditor';
import './App.css';
import HomePage from 'components/HomePage';
import TextEditor from 'components/__deck__/FlashcardEditor';
// import '../styles/__deck__/FlashcardEditor.css';
// import TextEditor from "../components/__deck__/FlashcardEditor";

function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/DeckEditor" element={<DeckEditor />} />
            <Route path="/FlashcardEditor" element={<TextEditor />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
