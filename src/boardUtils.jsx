export function check_row(boardArr, xscore, oscore, setWin, setXscore, setOscore, setCount){
    let countx = 0
    let county = 0
    for(let i=0;i<boardArr.length;i+=3){
        for(let j=i;j<3+i;j++){
            if(boardArr[j]=="X"){
                countx++;
            }
            if(boardArr[j]=="O"){
                county++;
            }
        }
        if(countx==3){
            setWin("X")
            setXscore(xscore+1)
            setCount(1)
        }
        if(county==3){
            setWin("O")
            setOscore(oscore+1)
            setCount(0)
        }
        countx=0
        county=0
    }
}


export function check_cols(boardArr, xscore, oscore, setWin, setXscore, setOscore, setCount){
    let countx = 0
    let county = 0
    for(let i=0;i<3;i++){
        for(let j=i;j<i+7;j+=3){
            if(boardArr[j]=="X"){
                countx++;
            }
            if(boardArr[j]=="O"){
                county++;
            }
        }
        if(countx==3){
            setWin("X")
            setXscore(xscore+1)
            setCount(1)
        }
        if(county==3){
            setWin("O")
            setOscore(oscore+1)
            setCount(0)
        }
        countx=0
        county=0
    }
}


export function check_cross_dig1(boardArr, xscore, oscore, setWin, setXscore, setOscore, setCount) {
    let countx = 0;
    let county = 0;
    for(let i=0;i<9;i+=4){
        if(boardArr[i]=="X"){
            countx++;
        }
        if(boardArr[i]=="O"){
            county++;
        }
    }
    if(countx==3){
        setWin("X")
        setXscore(xscore+1)
        setCount(1)
    }
    if(county==3){
        setWin("O")
        setOscore(oscore+1)
        setCount(0)
    }
}

export function check_cross_dig2(boardArr, xscore, oscore, setWin, setXscore, setOscore, setCount) {
    let countx=0
    let county=0

    for(let i=2;i<7;i+=2){
        if(boardArr[i]=="X"){
            countx++;
        }
        if(boardArr[i]=="O"){
            county++;
        }
    }
    if(countx==3){
        setWin("X")
        setXscore(xscore+1)
        setCount(1)
    }
    if(county==3){
        setWin("O")
        setOscore(oscore+1)
        setCount(0)
    }
}

export function check_tie(boardArr, win, setWin ) {
    let count = 0;
    boardArr.map((el)=>{
        if(el==null){
            return el
        }else{
            count++;
            return el;
        }
    })
    if(win != "X" && win != "O" && count == boardArr.length){
        setWin("it's a tie")
    }
}