import React from "react";
import { createBrowserRouter, RouterProvider,} from 'react-router-dom';
import Home from "./Pages/YThome";
import Shorts from "./Pages/YTshorts";
import Subscribe from "./Pages/YTsubscribe";
import You from "./Pages/YTyou";


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/YTshorts",
    element: <Shorts />,
  },
  {
    path:"/YTsubscribe",
    element: <Subscribe />,
  },
  {
    path:"/YTyou",
    element: <You />,
  }
  
])


function App() {
  return (<div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;

