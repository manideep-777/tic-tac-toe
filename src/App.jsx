import { useState } from 'react'
import './App.css'
import Board from './Board'
import { BoardProvider } from './BoardContext'


function App() {

  return (
    <>
    <BoardProvider>
      <Board />
    </BoardProvider>
    </>
  )
}

export default App
