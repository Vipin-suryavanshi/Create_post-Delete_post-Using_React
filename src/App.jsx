import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Footer from "./component/Footer";
import CreatePost from "./CreatePost";
import Form from "./component/Form";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import PostListProvider from "./store/PostlistContext-store";
function App() {
  const [selectitm, getselectitm] = useState("Home");
  return (
    <PostListProvider>
    <div className="main">
      <Sidebar selectitm={selectitm} getselectitm={getselectitm}></Sidebar>
      <div className="content">
        <Header></Header>
        {/* {selectitm === "Home" ? <CreatePost></CreatePost> : <Form></Form>} */}
        <Outlet/>
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
