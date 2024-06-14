import React, { useState } from "react";
import styles from "../styles/NewsSection.module.scss";

const NewsSection = ({ newsArticles }) => {
  const [displayedArticles, setDisplayedArticles] = useState(6);

  const handleToggleView = () => {
    if (displayedArticles === newsArticles.length) {
      // If all articles are displayed, show only the first 6
      setDisplayedArticles(6);
    } else {
      // If not all articles are displayed, show all remaining
      setDisplayedArticles(newsArticles.length);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.text_container}>
        <h1 className={styles.heading}>News</h1>
        <p className={styles.paragraph}>
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </p>
      </div>
      <div id="pageFirst" className={styles.card_container}>
        {newsArticles.slice(0, displayedArticles).map((article, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.image_container}>
              <img
                src={article.image}
                alt={article.title}
                className={styles.image}
              />
            </div>
            <div className={styles.card_content}>
              <h3>{article.title}</h3>
              <p>
                <strong>Date:</strong> {article.date}
              </p>
              <p>
                <strong>Author:</strong> {article.author}
              </p>
              <p>
                <strong>Category:</strong> {article.category}
              </p>
              <p>{article.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={handleToggleView}>
        {displayedArticles === newsArticles.length
          ? "View Less News"
          : "View All News"}
      </button>
    </div>
  );
};

export default NewsSection;
