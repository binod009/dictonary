import React from "react";
import Nav from "./Nav";
import SearchBar from "./searchbar";
import Card from "./card";
import Footer from "./footer";

const Home = ({ searchQuery, onSearch, onSubmit }) => {
  return (
    <>
      <Nav />
      <SearchBar
        searchQuery={searchQuery}
        onSearch={onSearch}
        onSubmit={onSubmit}
      />
      <Card />
      <Footer />
    </>
  );
};

export default Home;
