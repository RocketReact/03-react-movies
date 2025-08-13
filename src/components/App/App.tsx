import "./App.module.css";
import movieService from "../../services/movieService.ts";
import { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar.tsx";

function App() {
  function onHandlesubmit() {}

  useEffect(() => {
    async function f() {
      await movieService("car");
    }
    f();
  }, []);

  return (
    <>
      <SearchBar onSubmit={onHandlesubmit} />
    </>
  );
}

export default App;
