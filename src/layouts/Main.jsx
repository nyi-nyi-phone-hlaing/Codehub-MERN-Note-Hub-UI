import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <main className='w-full h-screen font-sans overflow-hidden bg-zinc-950 text-white'>
      <div className='container h-screen mx-auto overflow-hidden'>
        <Navbar />
        <div className='w-full h-[calc(100%-3.5rem)] overflow-hidden'>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Main;
