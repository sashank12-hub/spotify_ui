import Footer from "./components/Footer";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Heasder";
import Section from "./Section";
import axios from "axios";
import {
  browseCategories,
  featuredPlaylists,
  newReleases,
} from "./components/api";
import { useEffect, useState } from "react";

function App() {
  const [newreleases, setnewreleases] = useState([]);
  const [browse, setbrowse] = useState([]);
  const [featuredList, setfeaturedList] = useState([]);
  useEffect(() => {
    fetchbrowse(browseCategories);
    fetchnewreleases(newReleases);
    featuredlists(featuredPlaylists);
  }, []);

  const fetchnewreleases = async (url) => {
    const data = await axios.get(url);

    let images = data.data.albums.items.map((item) => {
      return { 'photo':item.images[1].url,'name':item.name}
     
    });
 
    setnewreleases(images);
  };
  const fetchbrowse = async (url) => {
    const data = await axios.get(url);

    let images = data.data.categories.items.map((item) => {
    
      return  { 'photo': item.icons[0].url,'name':item.name};
    });
  
  setbrowse(images);
  };
  const featuredlists = async (url) => {
    const data = await axios.get(url);

    let images = data.data.playlists.items.map((item) => {
      return { 'photo':item.images[0].url,'name':item.name};
    });
  
    setfeaturedList(images);
  };

  return (
    <div className="App">
      <div className="col1">
        <Sidebar />
      </div>
      <div className="col2">
        <Header />
        <Section
          text={"RELEASED THIS WEEK"}
          apidata={newreleases}
          id={"scroll1"}
        />
        <Section
          text={"FEATURED PLAYLISTS"}
          apidata={featuredList}
          id={"scroll2"}
        />
        <Section text={"BROWSE"} apidata={browse} id={"scroll3"} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
