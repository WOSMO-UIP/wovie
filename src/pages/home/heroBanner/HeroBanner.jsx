import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import "./heroBanner.scss";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/popular ");
  useEffect(() => {
    const bg = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <>
      <div className='heroBanner'>
        <div className='wrapper'>
          <div className='heroBannerContent'>
            <span className='title'>Welcom.</span>
            <span className='subTitle'>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </span>
            <div className='searchInput'>
              <input
                type='text'
                placeholder='Search for movie or tv show...'
                onChange={(event) => setQuery(event.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
