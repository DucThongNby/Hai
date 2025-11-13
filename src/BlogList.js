import React, { useEffect, useState } from "react";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs") // gọi API backend
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Blog List</h2>
      <ul>
        {blogs.map((b) => (
          <li key={b.id}>
            <a href={`/blog/${b.slug}`}>{b.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
