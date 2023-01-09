
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Artists from './Pages/Artists';
import Albums from './Pages/Albums';
import Users from './Pages/Users';
import AddArtist from './Pages/AddArtist';
import AddAlbum from './Pages/AddAlbum';
function App() {
  return (
    <div>
      <BrowserRouter>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1 className="navbar-brand, text-success">Admin Panel &nbsp;&nbsp;</h1>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link className="nav-link" to="/myartist">Artists</Link>
              <Link className="nav-link" to="/album">Album</Link>
              <Link className="nav-link" to="/user">Users</Link>
              <Link className="nav-link" to="/mymusic">My Music</Link>

            </ul>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/myartist" element={<Artists />} />
            <Route path="/album" element={<Albums />} />
            <Route path="/user" element={<Users />} />
            <Route path="/add-artist" element={<AddArtist />}/>
            <Route path="/add-album" element={<AddAlbum/>}/>

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};


export default App;
