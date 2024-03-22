import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import CalendarComponent from "./ui/CalendarComponent";
import News, { loader as newsLoader } from "./ui/News";
import Summary, { loader as summaryLoader } from "./ui/Summary";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/calendar",
        element: <CalendarComponent />,
      },
      {
        path: "/news/:date",
        element: <News />,
        loader: ({ params }) => newsLoader(params),
        errorElement: <Error />,
      },
      {
        path: "/summary/:date/:index",
        element: <Summary />,
        loader: ({ params }) => summaryLoader(params),
        errorElement: <Error />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
