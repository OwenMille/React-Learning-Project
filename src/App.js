import React from "react";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ArticlePage } from "./pages/ArticlePage";
import Navbar from "./Navbar/navbar";
import Home from "./pages/Home"
import About from "./pages/about";

export default function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Home' exact component={Home} />
        <Route path='/About' exact component={About} />
      </Switch>
      
      <div className="container">
          <ArticlePage></ArticlePage>
        </div>
    </Router>
  )
}
