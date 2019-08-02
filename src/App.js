import React, { useEffect, useState }  from "react";
import Axios from "axios";
import Title from "./components/Title.js"
import Image from "./components/Image.js";
import Info from "./components/Info.js";
import Date from "./components/Date.js";

import styled from "styled-components"
import "./App.css";

const StyledHeader = styled.h1`
  font-size: 4rem;
`;

function App() {
  
  const [apodDate, setApodDate] = useState()
  const [apodTitle, setApodTitle] = useState()
  const [apodImage, setApodImage] = useState()
  const [apodInfo, setApodInfo] = useState()

  useEffect( () => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=E1ajIgt95mk8ngY7fcn2OFCHTbbnMkATrajOaGcE')
      .then(res => {
        setApodDate(res.data.date)
        setApodTitle(res.data.title)
        setApodImage(res.data.url)
        setApodInfo(res.data.explanation)
      })
  }, [])

  return (
    <div className="App">
        <StyledHeader>🚀Astronomy Picture of the Day 🚀</StyledHeader>
        <Date date={ apodDate } />
        <Title title={ apodTitle } />
        <Image imageUrl={ apodImage } />
        <Info info={apodInfo} />
    </div>
  );
}

export default App;
