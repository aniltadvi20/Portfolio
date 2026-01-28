import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
        if (data.status === "ok") {
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
    <section className="min-h-screen bg-[#0A192F] pt-28 px-6 md:px-20 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-[#33FF33] mb-4"
      >
        Blogs & Security Research
      </motion.h1>

      <p className="text-[#8892B0] mb-10 max-w-2xl">
        My technical write-ups, vulnerability research, and real-world security
        findings published on Medium.
      </p>

      {/* Loading */}
      {loading && (
        <p className="text-[#8892B0] animate-pulse">
          Loading articles...
        </p>
      )}

      {/* Error */}
      {error && (
        <p className="text-red-400">
          Unable to load Medium blogs right now.
        </p>
      )}

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-[#112240] border border-[#33FF3320] rounded-xl p-6 hover:border-[#33FF33] transition"
          >
            <h3 className="text-lg font-semibold mb-3">
              {post.title}
            </h3>

            <p className="text-sm text-[#8892B0] mb-4">
              {post.description
                .replace(/<[^>]+>/g, "")
                .slice(0, 140)}
              ...
            </p>

            <a
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="text-[#33FF33] font-medium hover:underline"
            >
              Read on Medium →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
