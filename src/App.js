import "./App.css";
import Nav from "./component/Nav";
import { useState } from "react";
import SearchBar from "./component/searchbar";
import Card from "./component/card";
import axios from "axios";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [activeSkeleton, setActiveSkeleton] = useState(false);
  const [resdata, setResData] = useState([]);
  const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  function handleSearch(e) {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

  const FetchApi = (e) => {
    e.preventDefault();
    setActiveSkeleton(true);
    setShowSkeleton(true);
    try {
      setTimeout(async () => {
        const response = await axios.get(baseURL + searchQuery);
        setResData(response.data[0]);
        setActiveSkeleton(false);
        setShowSkeleton(false);
      }, 2000);
    } catch (excp) {
      console.log("Error", excp);
    }
  };
  return (
    <>
      <Nav />
      <SearchBar
        searchQuery={searchQuery}
        onSearch={handleSearch}
        onSubmit={FetchApi}
        setSearchQuery={setSearchQuery}
      />
      <Card
        data={resdata}
        skeleton={showSkeleton}
        loadingstate={activeSkeleton}
      />
    </>
  );
}

export default App;
