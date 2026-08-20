import { useNavigate } from "react-router";
import { FaPlayCircle } from "react-icons/fa";
import icon from '../assets/Tic Tac Toe Home Page Icon.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[url('assets/Home.jpg')] bg-cover bg-center h-screen">
      <div className="flex items-center justify-center"><img className="md:h-100 h-50 md:mb-10 mb-30 lg:mt-0 md:mt-10 mt-20" src={icon} alt='Tic Tac Toe Icon'/></div>
      <div className="pt-9 flex item-center justify-center">
        <button className="flex item-center justify-center md:h-30 h-25  md:w-100 w-70 bg-sky-300 text-yellow-300 md:text-7xl text-6xl font-bold border-8 border-yellow-300 pt-2 italic rounded-4xl text-shadow-lg shadow-xl/30 cursor-pointer animate-bounce hover:bg-yellow-500 hover:text-sky-300 duration-600" 
         onClick={() => navigate("/gameboard")}><FaPlayCircle/>Play</button>
      </div>
    </div>
  );
}

export default Home;
