import React from "react";
import { useState } from "react";
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Item } from "../Wordboxes/Item";
import { List } from "../Wordboxes/List";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export function ArticlePage() {

  return (
    
    
      <AnimateSharedLayout type="crossfade">
        <Router>
          <Route path={["/:id", "/"]} component={Store} />
        </Router>
      
      </AnimateSharedLayout>
    
  );
}
