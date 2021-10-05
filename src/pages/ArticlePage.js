import React from "react";
import { useState } from "react";
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Header } from "../Header";
import { Item } from "../Wordboxes/Item";
import { List } from "../Wordboxes/List";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { motion } from "framer-motion";
import {screens} from "../data/dat.js";

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


/* https://reactrouter.com/web/guides/scroll-restoration
 */