import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeslice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// jsx files import

import Header from "./components/header/Header";
import Footer from "./components/footer/Fotter";
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/explore";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((response) => {
      console.log(response);
      dispatch(getApiConfiguration(response));
    });
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

//   {/* just for testing => <Header /> <Footer/> <Home/> <Details /> <SearchResult /> <Explore /> <PageNotFound /> */}
