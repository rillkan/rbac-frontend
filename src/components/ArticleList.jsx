import { useEffect, useState } from "react";
import { getArticles, deleteArticle } from "../api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  // Retrieve the user's role from localStorage
  const token = localStorage.getItem("token");
  const role = token ? token.split(" ")[1] : "viewer";

  const fetchArticles = async () => {
    try {
      const res = await getArticles();
      setArticles(res.data);
    } catch (err) {
      console.error("Error fetching articles:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id);
      fetchArticles(); // refresh immediately
    } catch (err) {
      console.error("Error deleting article:", err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="article-list">
      <h2>Articles</h2>

      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <ul>
          {articles.map((a) => (
            <li key={a.id}>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
              <p>By: {a.author_username}</p>

              {/* Only show delete button if user is admin */}
              {role === "admin" && (
                <button onClick={() => handleDelete(a.id)}>Delete</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArticleList;
