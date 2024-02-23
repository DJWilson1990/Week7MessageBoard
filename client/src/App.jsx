import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./assets/components/NavBar";
import Home from "./assets/pages/Home";
import Post from "./assets/pages/Post";
import Messages from "./assets/pages/Messages";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </div>
  );
}
