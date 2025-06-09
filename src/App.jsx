import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RepoDetails from "./pages/RepoDetails";
import Repos from "./pages/Repos";

function App() {
  return (
    <>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/repos' element={<Repos />} />
            <Route path='/repo/:repoName' element={<RepoDetails />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
