import "./App.css";

import { useState } from "react";

import Card from "./component/card";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Maincontext } from "./Context/useContext";
import Home from "./component/Home";

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
      <Maincontext.Provider value={{ showSkeleton, activeSkeleton, resdata }}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchQuery={searchQuery}
                  onSearch={handleSearch}
                  onSubmit={FetchApi}
                />
              }
            />
            <Route path="details" element={<Card secondPage={true} />} />
          </Routes>
        </Router>
      </Maincontext.Provider>
    </>
  );
}

export default App;
