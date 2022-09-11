import React, { useState } from 'react';

import { app, database } from '../../firebase/firebase';
import { collection, addDoc, doc } from 'firebase/firestore';
import TextEditor from './FlashcardEditor';

const DeckEditor = () => {
  const [data, setData] = useState({});
  const collectionRef = collection(database, 'deck');

  const handleInput = (e) => {
    let inputs = { [e.target.name]: e.target.value };

    setData({ ...data, ...inputs });
  };

  const handleSubmit = () => {
    addDoc(collectionRef, {
      deckTitle: data.deckTitle,
      folder: data.folder || null,
    })
      .then(() => {
        console.log('Deck Created');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <input
        placeholder="Type the title of the deck"
        name="deckTitle"
        className="deckTitleInputField"
        onChange={(e) => handleInput(e)}
      />

      <input
        placeholder="Type the folder of the deck"
        name="folder"
        className="deckFolderInputField"
        onChange={(e) => handleInput(e)}
      />

      <button onClick={handleSubmit}>Create Deck</button>
      <button>Add New Flashcard</button>
    </div>
  );
};

export default DeckEditor;
