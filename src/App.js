import './App.css';
// import { Footer } from './component/Footer';
import { Navbar } from './component/Navbar';
import { Routes, Route,  } from "react-router-dom";
import { PopulerSearch } from "./component/PopulerSearch";
import { TopRatedMovie } from './component/TopRatedMovie';
import { PopulerMoviesDetails } from './component/PopulerMoviesDetails';
import { TopRatedMovieDetails } from './component/TopRatedMovieDetails';
// import { PureMain } from './component/PureMain';
// import {Footer} from './component/Footer'
import { DefaultMovieMovieDetails } from './component/DefaultMovieMovieDetails';



function App() {
  return (
    <div className="App">
      {/* <PureMain/> */}
      <Routes>
        <Route path="/" element={ <Navbar/>}>
        </Route>
        <Route path="/TopRatedMovie" element={ <TopRatedMovie/>}>
        </Route>
        <Route path="/PopulerSearch" element={ <PopulerSearch/>}>  
        </Route>
        <Route path="/PopulerMoviesDetails"  element={<PopulerMoviesDetails/>}>  
        </Route>
        <Route path="/TopRatedMovieDetails"  element={<TopRatedMovieDetails/>}>  
        </Route>
        <Route path="/DefaultMovieMovieDetails"  element={<DefaultMovieMovieDetails/>}>  
        </Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;