import './App.css'
import { Routes,Route } from 'react-router'
import Home from './JSX Components/Home'
import GameBoard from './JSX Components/Game Board'
import NotFound from './JSX Components/Not Found'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='gameboard' element={<GameBoard/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App