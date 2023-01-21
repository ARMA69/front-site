import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation/Navigation";
import useLocalStorage from "use-local-storage";

function App() {
  // -- !! Dark Theme Toggle  Start !! -- //
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  // -- !! Dark Theme Toggle  Finish !! -- //

  return (
    <>
      <BrowserRouter>
        <div className="App" data-theme={theme}>
          <Header switchTheme={switchTheme} />
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
