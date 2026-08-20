import {useState} from "react";
import { useNavigate } from 'react-router';
import { FaHouse } from "react-icons/fa6";

function GameBoard() {

    const initialBoard = () => {
        return Array(9).fill(null);
    }

    const [board, setBoard] = useState(initialBoard());
    const [isXNext, setIsXNext] = useState(true);
    
    const winpatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const getStatusMessage = () => {
        const winner = calculateWinner(board);
        if (winner) return `Hooray !!! Player ${winner} wins!`;
        if (!board.includes(null)) return `It's a draw!`;
        return `Player ${isXNext ? "X" : "O"} turn`;
    };

    const hidegameboard = () => {
        const winner = calculateWinner(board);
        if (winner || !board.includes(null)) return true;
        return false;
    }

    const calculateWinner = (currentBoard) => {
        for (let i = 0; i < winpatterns.length; i++) {
        const [a, b, c] = winpatterns[i];
        if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
            return currentBoard[a];
        }
        }
        return null;
    };

    const handleClick = (index) => {
        // check winner
        const winner = calculateWinner(board);
        if (winner || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const navigate = useNavigate();

    const resetGame = () => {
        setBoard(initialBoard());
        setIsXNext(true);
    };

    return (
        <div className="h-screen bg-[url('assets/Gamepage.jpg')] bg-cover bg-center text-center py-1">
            <div className={hidegameboard() ? "text-yellow-300 lg:text-[5rem] md:text-[4rem] text-[2rem] font-bold italic lg:mt-[15%] md:mt-[30%] mt-[60%] mb-[5%] [text-shadow:0_0_10px_rgb(9,10,0)] transition-all duration-300 ease-in-out" : "text-yellow-300 md:text-[3rem] text-[2rem] font-bold italic mb-[1%] mt-[1%] [text-shadow:0_0_10px_rgb(9,10,0)]"}>
            {getStatusMessage()}</div>
            <div>
                <div className={hidegameboard() ? "hidden" : "md:w-132 w-90 md:h-110 h-90 flex flex-wrap lg:justify-center items-center lg:ml-[31%] md:ml-[25%] sm:ml-[2%] mt-6"}>
                    {board.map((b, index) => {return (<button className="md:w-33 w-23 md:h-33 h-23 md:pb-0 pb-3 md:text-[8rem] text-[6rem] font-bold stroke-yellow-300 stroke-[2px] m-[1%] rounded-2xl cursor-pointer bg-[url('assets/Gamepage.jpg')] bg-no-repeat bg-center bg-cover text-[#fffafa] [text-shadow:0_0_3px_rgb(245,241,241)] [box-shadow:0_0_10px_rgba(9,10,0,1)] hover:border-3 hover:border-yellow-400" 
                    key={index} onClick={() => handleClick(index)} disabled={b !== null}>{b}</button>);})}
                </div> 
            </div>
            <div className="md:flex md:flex-row flex-column gap-130 justify-center "> 
                <button className="bg-[darkgreen] text-yellow-300 text-[2rem] italic font-bold [text-shadow:0_0_3px_rgb(245,241,241)] text-center h-20 w-20 rounded-[3rem] pl-6 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-yellow-300 hover:text-[darkgreen]"
                 onClick={() => navigate("/")}><FaHouse /></button>
                <button className="h-20 w-60 rounded-2xl border-none text-[2rem] italic font-bold [text-shadow:0_0_3px_rgb(245,241,241)] text-yellow-300 bg-[darkgreen] [box-shadow:0_4px_8px_0_rgb(236,228,4),0_6px_20px_0_rgb(226,238,2)] mt-[0.5%] transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-yellow-300 hover:text-[darkgreen]"
                onClick={() => resetGame()}>New Game</button>
            </div>
        </div>
  )
}

export default GameBoard