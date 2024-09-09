// App.js
import React from 'react';
import {ImageGallery} from './components/ImagenGallery/ImageGallery';
import {ValidatedForm} from './components/ValidatedForm/ValidatedForm';
import {GuessingGame} from './components/GuessingNumber/GuessingNumber';
import {ClickButtons} from './components/ClickButtons/ClickButtons';
import {NoteApp} from './components/NoteApp/NoteApp';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">Aplicación Interactiva React</h1>
      <ImageGallery />
      <ValidatedForm />
      <GuessingGame />
      <ClickButtons />
      <NoteApp />
    </div>
  );
};

export default App;