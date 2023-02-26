import React from 'react';
import './style.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Note from './components/Note.jsx';
import notes from './notes.js';

export default function App() {
  return (
    <div>
      <Header />
      {notes.map((notes) => (
        <Note key={notes.key} title={notes.title} content={notes.content} />
      ))}
      <Footer />
    </div>
  );
}
