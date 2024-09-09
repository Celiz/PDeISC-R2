import React, { useState, useEffect } from 'react';
import './ClickButtons.css';

export const ClickButtons = () => {
    const [theme, setTheme] = useState('light');
    const [volume, setVolume] = useState(50);
    const [cartItems, setCartItems] = useState(0);
    const [randomNumber, setRandomNumber] = useState(null);
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('');
    const [lastAction, setLastAction] = useState('');

    useEffect(() => {
        let interval;
        if (isTimerRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning]);

    const handleButtonClick = (button) => {
        switch (button) {
            case 'theme':
                setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
                setLastAction('Tema cambiado');
                break;
            case 'volume':
                setVolume((prev) => Math.min(prev + 10, 100));
                setLastAction('Volumen aumentado');
                break;
            case 'cart':
                setCartItems((prev) => prev + 1);
                setLastAction('Artículo añadido al carrito');
                break;
            case 'random':
                setRandomNumber(Math.floor(Math.random() * 100) + 1);
                setLastAction('Número aleatorio generado');
                break;
            case 'counter':
                setCounter((prev) => prev + 1);
                setLastAction('Contador incrementado');
                break;
            case 'timer':
                setIsTimerRunning((prev) => !prev);
                setLastAction(isTimerRunning ? 'Temporizador pausado' : 'Temporizador iniciado');
                break;
            case 'color':
                setBackgroundColor(getRandomColor());
                setLastAction('Color de fondo cambiado');
                break;
            case 'clear':
                setLastAction('Última acción limpiada');
                break;
            default:
                break;
        }
    };

    const handleButtonDoubleClick = (button) => {
        switch (button) {
            case 'theme':
                setTheme('light');
                setLastAction('Tema reiniciado a claro');
                break;
            case 'volume':
                setVolume(0);
                setLastAction('Volumen silenciado');
                break;
            case 'cart':
                setCartItems(0);
                setLastAction('Carrito vaciado');
                break;
            case 'random':
                setRandomNumber(null);
                setLastAction('Número aleatorio reiniciado');
                break;
            case 'counter':
                setCounter(0);
                setLastAction('Contador reiniciado');
                break;
            case 'timer':
                setTimer(0);
                setIsTimerRunning(false);
                setLastAction('Temporizador reiniciado');
                break;
            case 'color':
                setBackgroundColor('');
                setLastAction('Color de fondo reiniciado');
                break;
            case 'clear':
                setTheme('light');
                setVolume(50);
                setCartItems(0);
                setRandomNumber(null);
                setCounter(0);
                setTimer(0);
                setIsTimerRunning(false);
                setBackgroundColor('');
                setLastAction('Todo reiniciado');
                break;
            default:
                break;
        }
    };

    const getRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    const buttonColors = [
        'button-purple', 'button-indigo', 'button-blue', 'button-green',
        'button-yellow', 'button-orange', 'button-red', 'button-pink'
    ];

    return (
        <div className={`buttons-container ${theme}`} style={{ backgroundColor }}>
            <h2 className="buttons-title">Botones con Click y Doble Click</h2>
            <button
                onClick={() => handleButtonClick('theme')}
                onDoubleClick={() => handleButtonDoubleClick('theme')}
                className={`button ${buttonColors[0]}`}
            >
                Tema ({theme})
            </button>
            <button
                onClick={() => handleButtonClick('volume')}
                onDoubleClick={() => handleButtonDoubleClick('volume')}
                className={`button ${buttonColors[1]}`}
            >
                Volumen ({volume})
            </button>
            <button
                onClick={() => handleButtonClick('cart')}
                onDoubleClick={() => handleButtonDoubleClick('cart')}
                className={`button ${buttonColors[2]}`}
            >
                Carrito ({cartItems})
            </button>
            <button
                onClick={() => handleButtonClick('random')}
                onDoubleClick={() => handleButtonDoubleClick('random')}
                className={`button ${buttonColors[3]}`}
            >
                Aleatorio ({randomNumber || 'N/A'})
            </button>
            <button
                onClick={() => handleButtonClick('counter')}
                onDoubleClick={() => handleButtonDoubleClick('counter')}
                className={`button ${buttonColors[4]}`}
            >
                Contador ({counter})
            </button>
            <button
                onClick={() => handleButtonClick('timer')}
                onDoubleClick={() => handleButtonDoubleClick('timer')}
                className={`button ${buttonColors[5]}`}
            >
                Temporizador ({timer}s)
            </button>
            <button
                onClick={() => handleButtonClick('color')}
                onDoubleClick={() => handleButtonDoubleClick('color')}
                className={`button ${buttonColors[6]}`}
            >
                Color de fondo
            </button>
            <button
                onClick={() => handleButtonClick('clear')}
                onDoubleClick={() => handleButtonDoubleClick('clear')}
                className={`button ${buttonColors[7]}`}
            >
                Limpiar
            </button>
            <p className="last-action">Última acción: {lastAction}</p>
        </div>
    );
};