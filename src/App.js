
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from "./components/home/Home";
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Explore } from './components/Explore/Explore';
import { Trending } from './components/trending/Trending';
import { News } from './components/News/News';
import { Sports } from './components/sports/Sports';
import {Entertainment } from './components/Entertainment/Entertainments'

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/"} element={<Register />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/Explore"} element={<Explore />} />
        <Route path={"/Explore/trending"} element={<Trending />} />
        <Route path={"/Explore/news"} element={<News />} />
        <Route path={"/Explore/sports"} element={<Sports />} />
         <Route path={"/Explore/entertainment"} element={<Entertainment />} />
      </Routes>
    </div>
  );
}

export default App;
