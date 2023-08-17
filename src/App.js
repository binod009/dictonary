import "./App.css";
import Nav from "./component/Nav";
import { useState } from "react";
import SearchBar from "./component/searchbar";
import Card from "./component/card";
import axios from "axios";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [resdata, setResData] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };
  let FetchApi = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchQuery
      );
      setResData(response.data);
      console.log("========>result", resdata);
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
      <Card />
      <button className="bg-red-500 px-5 py-2 rounded-md" onClick={FetchApi}>
        search
      </button>
    </>
  );
}

export default App;
