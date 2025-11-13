import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogList from "./BlogList";
import BlogDetail from "./BlogDetail";

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
