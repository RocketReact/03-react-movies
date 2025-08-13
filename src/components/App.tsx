import "./App.css";
import movieService from "../services/movieService.ts";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function f() {
      await movieService("car");
    }
    f();
  }, []);

  return <></>;
}

export default App;
