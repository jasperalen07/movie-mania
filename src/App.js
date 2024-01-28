import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './scss/styles.scss'
import AboutPage from "./pages/AboutPage";
import FavouritePage from "./pages/FavouritePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pages/AboutPage" element = {<AboutPage />}></Route>
        <Route path="/pages/FavouritePage" element = {<FavouritePage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
