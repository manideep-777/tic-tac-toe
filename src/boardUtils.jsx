import { useContext } from 'react';
import { BoardContext } from './BoardContext';

export function useBoardUtils() {

    const { count, setCount, boardArr, setBoardArr, win, setWin, stopGame, setStopGame, xscore, setXscore, oscore, setOscore, newGame, setNewGame, whoStart, setWhoStart, xo, setxo } = useContext(BoardContext)

     function check_row() {
        let countx = 0
        let county = 0
        for (let i = 0; i < boardArr.length; i += 3) {
            for (let j = i; j < 3 + i; j++) {
                if (boardArr[j] == "X") {
                    countx++;
                }
                if (boardArr[j] == "O") {
                    county++;
                }
            }
            if (countx == 3) {
                setWin("X")
                setXscore(xscore + 1)
                setCount(1)
            }
            if (county == 3) {
                setWin("O")
                setOscore(oscore + 1)
                setCount(0)
            }
            countx = 0
            county = 0
        }
    }


     function check_cols() {
        let countx = 0
        let county = 0
        for (let i = 0; i < 3; i++) {
            for (let j = i; j < i + 7; j += 3) {
                if (boardArr[j] == "X") {
                    countx++;
                }
                if (boardArr[j] == "O") {
                    county++;
                }
            }
            if (countx == 3) {
                setWin("X")
                setXscore(xscore + 1)
                setCount(1)
            }
            if (county == 3) {
                setWin("O")
                setOscore(oscore + 1)
                setCount(0)
            }
            countx = 0
            county = 0
        }
    }


     function check_cross_dig1() {
        let countx = 0;
        let county = 0;
        for (let i = 0; i < 9; i += 4) {
            if (boardArr[i] == "X") {
                countx++;
            }
            if (boardArr[i] == "O") {
                county++;
            }
        }
        if (countx == 3) {
            setWin("X")
            setXscore(xscore + 1)
            setCount(1)
        }
        if (county == 3) {
            setWin("O")
            setOscore(oscore + 1)
            setCount(0)
        }
    }

     function check_cross_dig2() {
        let countx = 0
        let county = 0

        for (let i = 2; i < 7; i += 2) {
            if (boardArr[i] == "X") {
                countx++;
            }
            if (boardArr[i] == "O") {
                county++;
            }
        }
        if (countx == 3) {
            setWin("X")
            setXscore(xscore + 1)
            setCount(1)
        }
        if (county == 3) {
            setWin("O")
            setOscore(oscore + 1)
            setCount(0)
        }
    }

     function check_tie() {
        let count = 0;
        boardArr.map((el) => {
            if (el == null) {
                return el
            } else {
                count++;
                return el;
            }
        })
        if (win != "X" && win != "O" && count == boardArr.length) {
            setWin("it's a tie")
        }
    }

    return {
        check_row,
        check_cols,
        check_cross_dig1,
        check_cross_dig2,
        check_tie,
    };
}

