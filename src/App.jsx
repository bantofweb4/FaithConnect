import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import Podcast from "./pages/Podcast";
import Bookspage from "./pages/Bookspage";
import Aboutpage from "./pages/Aboutpage";
import Dashboard from "./pages/Dashboard";
import PodcastDashboard from "./pages/PodcastDashboard";
import BooksDashboard from "./pages/BooksDashboard";
import Blogspages from "./pages/Blogspages";
import Steppingpage from "./pages/Steppingpage";
import Christainpage from "./pages/Christainpage";
import Projectpage from "./pages/Projectpage";
import Kennbook from "./pages/Kennbook";
import Pilgrim from "./pages/Pilgrim";
import Adeboyepage from "./pages/Adeboyepage";
import Jamespage from "./pages/Jamespage";
import Faithpage from "./pages/Faithpage";
import Frictionalpage from "./pages/Frictionalpage";
import NonFrictional from "./component/NonFrictional";
import NonFrictionalpage from "./pages/NonFrictionalpage";
import Childrenpage from "./pages/Childrenpage";
import MainBlog from "./pages/MainBlog";
import Loginpage from "./pages/Loginpage";
import DeviceCheck from "./pages/DeviceCheck";

function App() {
  return (
    <>
      <BrowserRouter>
        <DeviceCheck>
          <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/bookspage" element={<Bookspage />} />
            <Route path="/aboutpage" element={<Aboutpage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/podcastdashboard" element={<PodcastDashboard />} />
            <Route path="/BooksDashboard" element={<BooksDashboard />} />
            <Route path="/blogspages" element={<Blogspages />} />
            <Route path="/Steppingpage" element={<Steppingpage />} />
            <Route path="/christainpage" element={<Christainpage />} />
            <Route path="/projectpage" element={<Projectpage />} />
            <Route path="/kennbook" element={<Kennbook />} />
            <Route path="/kennbook" element={<Kennbook />} />
            <Route path="/Pilgrim" element={<Pilgrim />} />
            <Route path="/adeboyepage" element={<Adeboyepage />} />
            <Route path="/jamespage" element={<Jamespage />} />
            <Route path="/Faithpage" element={<Faithpage />} />
            <Route path="/Frictionalpage" element={<Frictionalpage />} />
            <Route path="/nonFrictionalpage" element={<NonFrictionalpage />} />
            <Route path="/childrenpage" element={<Childrenpage />} />
            <Route path="/MainBlog" element={<MainBlog />} />
            <Route path="/loginpage" element={<Loginpage />} />
          </Routes>
        </DeviceCheck>
      </BrowserRouter>
    </>
  );
}

export default App;
