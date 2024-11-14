import { useState, useEffect } from 'react'
import Sqaure from './Sqaure'
import './App.css'
import { check_row, check_cols, check_cross_dig1, check_cross_dig2, check_tie } from './boardUtils'

export default function Board() {

    const [count, setCount] = useState(1);
    const [boardArr, setBoardArr] = useState(Array(9).fill(null));
    const [win, setWin] = useState("");
    const [stopGame, setStopGame] = useState(false);
    const [xscore, setXscore] = useState(0);
    const [oscore, setOscore] = useState(0);
    const [newGame, setNewGame] = useState(false);
    const [whoStart, setWhoStart] = useState("X");
    const [xo, setxo] = useState("O")

    useEffect(() => {
        const func = async () => {
            await check_row(boardArr, xscore, oscore, setWin, setXscore, setOscore, setCount);
            await check_cols(boardArr, xscore, oscore, setWin, setXscore, setOscore, setCount);
            await check_cross_dig1(boardArr, xscore, oscore, setWin, setXscore, setOscore, setCount);
            await check_cross_dig2(boardArr, xscore, oscore, setWin, setXscore, setOscore, setCount);
        }
        func();
    }, [boardArr])

    useEffect(() => {
        if (win === "" && boardArr.length === 9) {
            const checkForTie = async () => {
                await check_tie(boardArr, win, setWin);
            };
            checkForTie();
        }
    }, [win, boardArr]);

    useEffect(() => {
        if (win != "") {
            setStopGame(true);
            if (win == "X") {
                setxo("O");
            }
            if (win == "O") {
                setxo("X");
            }
        }
        console.log(win);
    }, [win])

    useEffect(() => {
        if (newGame) {
            // Reset `newGame` to false after triggering any child component logic
            setNewGame(false);
        }
    }, [newGame]);

    useEffect(() => {

        console.log(whoStart);

    }, [whoStart])





    function handleClick(index) {
        let play = "";
        if (!stopGame && boardArr[index - 1] == null) {
            let i = parseInt(index) - 1
            if (count % 2 == 0) {
                play = "O"
                setBoardArr(
                    boardArr.map((el, index) => {
                        if (index == i) {
                            return "O"
                        }
                        return el
                    })
                )
            }
            if (count % 2 != 0) {
                play = "X"
                setBoardArr(
                    boardArr.map((el, index) => {
                        if (index == i) {
                            return "X"
                        }
                        return el
                    })
                )
            }
            setCount(count + 1);
            setxo(play)
            return play
        }
        return boardArr[index - 1]
    }



    function nextGame() {
        setBoardArr(Array(9).fill(null));
        setStopGame(false);
        setNewGame(!newGame);

        if (win == "X") {
            setWhoStart("X");
            setxo("O");
            setCount(1);
        }
        if (win == "O") {
            setWhoStart("O");
            setxo("X");
            setCount(0);
        }

        setWin("");
    }

    function resetGame() {
        setBoardArr(Array(9).fill(null));
        setStopGame(false);
        setNewGame(!newGame);
        if (whoStart == "X") {
            setCount(1);
            setxo("O")
        }
        if (whoStart == "O") {
            setCount(0);
            setxo("X");
        }
        setWin("");
    }

    return (
        <div className={xo == "O" ? "bg-red-400" : "bg-blue-400"}>
            <div className='flex flex-col justify-center items-center h-screen w-screen' >
                <div className={`text-2xl text-white font-semibold`}> {whoStart} Starts First </div>
                <div className="flex m-5">
                    <p className={`text-xl text-white font-medium`}>X - Score : {xscore}</p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p className={`text-xl text-white font-medium`}>O - Score : {oscore}</p>
                </div>
                <div className="line1 flex">
                    <Sqaure index="1" click={handleClick} newGame={newGame} classes={"border-l-0 border-t-0 border-white"} />
                    <Sqaure index="2" click={handleClick} newGame={newGame} classes={"border-t-0 border-white"} />
                    <Sqaure index="3" click={handleClick} newGame={newGame} classes={"border-r-0 border-t-0 border-white"} />
                </div>
                <div className="line2 flex">
                    <Sqaure index="4" click={handleClick} newGame={newGame} classes={"border-l-0 border-white"} />
                    <Sqaure index="5" click={handleClick} newGame={newGame} classes={" border-white"} />
                    <Sqaure index="6" click={handleClick} newGame={newGame} classes={"border-r-0 border-white"} />
                </div>
                <div className="line3 flex">
                    <Sqaure index="7" click={handleClick} newGame={newGame} classes={"border-l-0 border-b-0 border-white"} />
                    <Sqaure index="8" click={handleClick} newGame={newGame} classes={"border-b-0 border-white"} />
                    <Sqaure index="9" click={handleClick} newGame={newGame} classes={"border-r-0 border-b-0 border-white"} />
                </div>
                <div className='m-5 text-white text-xl font-semibold'>{win == "it's a tie" ? win : win != "" ? win + " wins" : ""}</div>
                <div className="flex">
                    <div className="mx-2">
                        <button type="button" className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={nextGame}>
                            Start New Game
                        </button>
                    </div>
                    <div className="mx-2">
                        <button type="button" className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={resetGame}>
                            Reset Existing Game
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}
