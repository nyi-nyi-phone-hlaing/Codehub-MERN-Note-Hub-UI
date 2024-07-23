import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

const Main = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <main className='w-full h-screen font-sans overflow-hidden bg-zinc-950 text-white'>
      <div className='container h-screen mx-auto overflow-hidden'>
        <Navbar />
        <div className='w-full h-[calc(100%-3.5rem)] overflow-hidden'>
          {isLoading ? <Loading /> : <Outlet />}
        </div>
      </div>
    </main>
  );
};

export default Main;
