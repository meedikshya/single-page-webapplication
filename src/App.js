// App.js

import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PageFirst from "./components/PageFirst";
import { PageSecond } from "./components/PageSecond";
import NewsSection from "./components/NewsSection";
import { Resources } from "./components/Resources";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import Error404 from "./components/Error404";
import "./styles/index.scss";

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsArticles = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_NEWS_API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setNewsArticles(data.news);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNewsArticles();
  }, []);

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  const handleCloseSearch = () => {
    setShowSearchBar(false);
  };

  return (
    <div className="App">
      <Router>
        <Header onSearchIconClick={handleSearchIconClick} />
        <Hero showSearchBar={showSearchBar} onCloseSearch={handleCloseSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                newsArticles={newsArticles}
                loading={loading}
                error={error}
              />
            }
          />
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />{" "}
          {/* Catch-all route for 404 */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

const HomePage = ({ newsArticles, loading, error }) => (
  <>
    <PageFirst />
    <PageSecond />
    {loading ? (
      <p>Loading news articles...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (
      <NewsSection newsArticles={newsArticles} />
    )}
    <Resources />
    <ContactUs />
  </>
);

export default App;
