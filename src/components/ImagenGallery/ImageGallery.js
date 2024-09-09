import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './ImageGallery.css';

export const ImageGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'https://via.placeholder.com/800x400?text=Imagen+1',
        'https://via.placeholder.com/800x400?text=Imagen+2',
        'https://via.placeholder.com/800x400?text=Imagen+3',
        'https://via.placeholder.com/800x400?text=Imagen+4',
        'https://via.placeholder.com/800x400?text=Imagen+5',
    ];

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                handlePrevImage();
            } else if (e.key === 'ArrowRight') {
                handleNextImage();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handlePrevImage = () => {
        setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className="gallery">
            <h2 className="gallery-title">Galería de Imágenes</h2>
            <div className="image-container">
                <img src={images[currentImage]} alt={`Imagen ${currentImage + 1}`} className="gallery-image" />
                <div className="arrow arrow-left" onClick={handlePrevImage}>
                    <ArrowLeft />
                </div>
                <div className="arrow arrow-right" onClick={handleNextImage}>
                    <ArrowRight />
                </div>
            </div>
            <p className="gallery-instruction">
                Use las teclas de flecha izquierda y derecha o los botones para navegar
            </p>
        </div>
    );
};
