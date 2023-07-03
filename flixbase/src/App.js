import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="movie/:id" element={<span>Movie Page</span>}></Route>
                <Route path="movies/:type" element={<span>Movie list Page</span>}></Route>
                <Route path="/*" element={<span>Error Page</span>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;