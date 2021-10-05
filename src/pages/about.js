
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ArticlePage } from "./ArticlePage";

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>GeeksforGeeks is a Computer Science portal for geeks.</h1>
    <Router>
    <div className="container">
          <ArticlePage></ArticlePage>
        </div>
    </Router>
    </div>
  );
};
  
export default About;