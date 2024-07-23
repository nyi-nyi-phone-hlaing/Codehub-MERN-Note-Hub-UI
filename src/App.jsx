import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home, { loader as homeLoader } from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import ViewNote, { loader as viewNoteLoader } from "./pages/ViewNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: "/create-note", element: <CreateNote /> },
      {
        path: "/view-note/:noteId",
        element: <ViewNote />,
        loader: viewNoteLoader,
      },
      { path: "/edit-note/:noteId", element: <EditNote /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
