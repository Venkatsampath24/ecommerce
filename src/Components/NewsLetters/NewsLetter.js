import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subcribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subcribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
