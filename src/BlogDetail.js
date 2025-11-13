import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error("Error:", err));
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetail;
