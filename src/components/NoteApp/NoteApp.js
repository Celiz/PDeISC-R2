import React, { useState, useEffect, useCallback } from 'react';
import "./NoteApp.css";

export const NoteApp = () => {
    const [note, setNote] = useState('');
    const [savedNote, setSavedNote] = useState('');

    const saveNote = useCallback(() => {
        setSavedNote(note);
    }, [note]);

    useEffect(() => {
        const timer = setTimeout(saveNote, 2000);
        return () => clearTimeout(timer);
    }, [note, saveNote]);

    return (
        <div className="note-app">
            <h2 className="note-title">Aplicación de Notas</h2>
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Escribe una nota..."
                className="note-textarea"
            />
            <p className="note-saved">
                Última nota guardada: <span className="note-saved-content">{savedNote}</span>
            </p>
        </div>
    );
};