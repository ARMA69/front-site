import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
