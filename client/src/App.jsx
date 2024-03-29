import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./assets/components/NavBar";
import Home from "./assets/pages/Home";
import Post from "./assets/pages/Post";
import ViewMessages from "./assets/pages/ViewMessages";
import Login from "./assets/pages/Login";
import Registration from "./assets/pages/Registration";
import Categories from "./assets/pages/Categories";

export default function App() {
  let loggedInUser = {};

  return (
    <div>
      <NavBar />
      <p>{loggedInUser.user_name}</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/messages" element={<ViewMessages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
