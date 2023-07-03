import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<h1>Error Page</h1>}></Route>
                <Route path="movie/:id" element={<h1>Error Page</h1>}></Route>
                <Route path="movies/:type" element={<h1>Error Page</h1>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;