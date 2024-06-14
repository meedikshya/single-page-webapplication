import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/index.scss";
// import "./styles/Header.module.scss";
// import "./styles/variables.scss";
import PageFirst from "./components/PageFirst";
import { PageSecond } from "./components/PageSecond";
import NewsSection from "./components/NewsSection";
import { Resources } from "./components/Resources";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  const handleCloseSearch = () => {
    setShowSearchBar(false);
  };

  useEffect(() => {
    const fetchNewsArticles = () => {
      fetch(process.env.REACT_APP_NEWS_API_URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setNewsArticles(data.news); // Accessing the news property of the fetched data
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    };

    fetchNewsArticles();
  }, []);
  console.log(newsArticles);

  return (
    <div className="App">
      <Header onSearchIconClick={handleSearchIconClick} />
      <Hero showSearchBar={showSearchBar} onCloseSearch={handleCloseSearch} />
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
      <Footer />
    </div>
  );
}

export default App;
