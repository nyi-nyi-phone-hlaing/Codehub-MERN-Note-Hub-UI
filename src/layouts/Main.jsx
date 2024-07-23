import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { Bounce, ToastContainer } from "react-toastify";

const Main = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <main className='w-full h-screen font-sans overflow-hidden bg-zinc-950 text-white'>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='dark'
        transition={Bounce}
      />
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
