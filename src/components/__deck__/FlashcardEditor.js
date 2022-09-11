import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { app, database } from '../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

const TextEditor = () => {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const collectionRef = collection(database, 'flashcards');

  const handleSubmit = () => {
    addDoc(collectionRef, {
      front: front,
      back: back,
    })
      .then(() => {
        console.log('Flashcard Added');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <ReactQuill theme="snow" value={front} onChange={setFront} name="front" />

      <ReactQuill theme="snow" value={back} onChange={setBack} name="back" />

      <button onClick={handleSubmit}>Add Flashcard</button>
    </div>
  );
};

export default TextEditor;
