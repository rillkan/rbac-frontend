import { useState } from "react";
import { createArticle } from "../api";
import "../App.css";

export default function ArticleForm({ onArticleCreated }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
    alert("⚠️ Please enter both a title and content before submitting!");
    return;
  }
    try {
      await createArticle({ title, body });
      setTitle("");
      setBody("");
      if (onArticleCreated) onArticleCreated();
    } catch (err) {
      console.error("Error creating article:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="article-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter article title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter article body"
      />
      <button type="submit">Create</button>
    </form>
  );
}
