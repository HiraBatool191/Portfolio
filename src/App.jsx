import { useState } from "react";
import "./App.css";
import Routers from "./Routers";
import useScrollAnimation from "./useScrollAnimation";

function App() {
  const [count, setCount] = useState(0);

  // 👇 scroll animation hook add kiya
  useScrollAnimation();

  return (
    <>
      <Routers />
    </>
  );
}

export default App;