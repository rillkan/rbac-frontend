import { useState } from "react";
import ArticleList from "../components/ArticleList";
import ArticleForm from "../components/ArticleForm";

const Home = ({ role, onLogout }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleArticleCreated = () => {
    setRefreshKey((prev) => prev + 1); // trigger re-render
  };

  return (
    <div className="home">
      <div className="home-header">
        <h1>Welcome, {role.toUpperCase()}</h1>
        <button onClick={onLogout}>Logout</button>
      </div>

      {(role === "admin" || role === "editor") && (
        <ArticleForm onArticleCreated={handleArticleCreated} />
      )}

      {/* Refresh ArticleList whenever refreshKey changes */}
      <ArticleList key={refreshKey} />
    </div>
  );
};

export default Home;
