import "./App.css";
import Nav from "./component/Nav";
import { useState } from "react";
import SearchBar from "./component/searchbar";
import Card from "./component/card";
import axios from "axios";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [resdata, setResData] = useState([]);
  const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  function handleSearch(e) {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

  const FetchApi = async (e) => {
    e.preventDefault();
    console.log("<===>", searchQuery);
    try {
      let response = await axios.get(baseURL + searchQuery);
      setResData(response.data[0]);
    } catch (excp) {
      console.log("thisis excp", excp);
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
      <Card data={resdata} />
      <button className="bg-red-500 px-5 py-2 rounded-md" onClick={FetchApi}>
        search
      </button>
    </>
  );
}

export default App;
