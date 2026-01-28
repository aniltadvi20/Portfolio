import React, { useEffect, useState } from "react";

const MEDIUM_RSS =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aniltadvi";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(MEDIUM_RSS)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.items) {
          setPosts(data.items.slice(0, 9));
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section
      style={{
        background: "#0A192F",
        minHeight: "100vh",
        padding: "120px",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Blogs & Security Research
      </h1>

      {loading && <p>Loading articles...</p>}
      {error && <p>Unable to load Medium blogs.</p>}

      <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              background: "#112240",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>{post.title}</h3>
            <p>
              {post.description
                ?.replace(/<[^>]+>/g, "")
                .slice(0, 140)}
              ...
            </p>
            <a
              href={post.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#33FF33" }}
            >
              Read on Medium →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
