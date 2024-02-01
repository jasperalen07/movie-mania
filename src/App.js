import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageSingleMovie from "./pages/PageSingleMovie";
import AboutPage from "./pages/AboutPage";
import FavouritePage from "./pages/FavouritePage";
import './scss/styles.scss'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pages/AboutPage" element= {<AboutPage/>}></Route>
        <Route path="/pages/FavouritePage" element= {<FavouritePage/>}></Route>
        <Route path="/movie/:id" element={<PageSingleMovie />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
