import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./CreatePost.jsx";
import Form from "./component/Form.jsx";

const router = createBrowserRouter([{
   path: "/", 
   element: <App />,
   children:[
    {path:"/", element: <CreatePost/>},
    {path:"/create-post", element: <Form/>},
   ],
  }]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
