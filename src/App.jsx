import React from "react";
import { Card } from "./components/card";
import { Frame } from "./components/Frame";
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './global.css'

function App() {
  return (
   <main>
    <Sidebar />
    <section>
      <Header />
      <Card />
      <Frame />
    </section>
    
   </main>

  );
}

export default App
