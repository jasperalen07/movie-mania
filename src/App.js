import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageSingleMovie from "./pages/PageSingleMovie";
import SearchResults from "./pages/SearchResults";
import './scss/styles.scss'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movie/:id" element={<PageSingleMovie />} />
        <Route path="/searchResults" element={<SearchResults />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
