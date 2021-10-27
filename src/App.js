import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ArticlePage } from "./pages/ArticlePage";

export default function App() {
  return (
    <>
     <Router>
      <div className="container">
        <ArticlePage></ArticlePage>
      </div>
    </Router> 
    </>
  )
}
