import { createContext, useState } from 'react';

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
    
    const [count, setCount] = useState(1);
    const [boardArr, setBoardArr] = useState(Array(9).fill(null));
    const [win, setWin] = useState("");
    const [stopGame, setStopGame] = useState(false);
    const [xscore, setXscore] = useState(0);
    const [oscore, setOscore] = useState(0);
    const [newGame, setNewGame] = useState(false);
    const [whoStart, setWhoStart] = useState("X");
    const [xo, setxo] = useState("O")

    const value = {count, setCount, boardArr, setBoardArr, win, setWin, stopGame, setStopGame, xscore, setXscore, oscore, setOscore, newGame, setNewGame, whoStart, setWhoStart, xo, setxo}
  
    return (
      <BoardContext.Provider value={value}>
        {children}
      </BoardContext.Provider>
    );
  };