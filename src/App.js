import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageSingleMovie from "./pages/PageSingleMovie";
import AboutPage from "./pages/AboutPage";
import FavouritePage from "./pages/FavouritePage";
import SearchResults from "./pages/SearchResults";



import './scss/styles.scss'
import { GlobalProvider } from "./context/GlobalContext";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalProvider>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pages/AboutPage" element= {<AboutPage/>}></Route>
        <Route path="/pages/FavouritePage" element= {<FavouritePage/>}></Route>
        <Route path="/movie/:id" element={<PageSingleMovie />} />
        <Route path="/searchResults" element={<SearchResults />} />

      </Routes>
      </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
