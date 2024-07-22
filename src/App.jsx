import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import ViewNote from "./pages/ViewNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "/create-note", element: <CreateNote /> },
      { path: "/view-note/:noteId", element: <ViewNote /> },
      { path: "/edit-note/:noteId", element: <EditNote /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
