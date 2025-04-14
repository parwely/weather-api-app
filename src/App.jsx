import { useState } from "react";
import "tailwindcss";

import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Hero />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
