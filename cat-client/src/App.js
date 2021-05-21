import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { getByPlaceholderText } from '@testing-library/dom';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


function App() {
  return (
    <div className="App">
      <Cat></Cat>
    </div>
  );
}

function Cat() {
  const [catURL, setCatURL] = useState("");
  const [catLoading, setCatLoading] = useState(false);
  const [catWidth, setCatWidth] = useState(0)
  const [catHeight, setCatHeight] = useState(0)

  function getCat() {
    setCatLoading(true);
    setCatURL("");
    console.log("fetch cats")
    //let requesturl= "https://thatcopy.pw/catapi/rest/"
    let requesturl= "/catapi/rest/"
    let options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    }
    //setCatLoading(true)
    fetch(requesturl, options)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        if(data && data.url){
          setCatURL(data.url)
          setCatWidth(data.x)
          setCatHeight(data.y)
          setCatLoading(false)
        }
    });
  }

  useEffect(() => {
    //if this is a cat or are in process of getting cat, don't get another
    if(!catURL && !catLoading){
    //if(!catURL){
      getCat();
    }
  });
/*
width={catWidth} height={catHeight}
*/
  function CatImage() {
    if(catURL){
      return (
        <div>
          <div className="image"><img width="100%" alt="cat" src={catURL}></img></div>
          <div>url: {catURL} </div>
        </div>
      );
    }
    else{
      return(
        <div>
          <Spinner animation="border" />
        </div>
      );
    }
  }

  function CatButton(props) {
    return (
        <div id="button">
          <Button 
            disabled={catLoading}
            onClick={!catLoading ? props.onClick : null}
          > 
            {catLoading ? "Loading..." : props.buttonText}
          </Button>
        </div>
    );
  }

  return (
    <div id="content">
      <div id="title"><h1>Cats! Cats! Cats!</h1></div>
      <div id="imageContainer">
        <CatImage></CatImage>
      </div>
      <div id="buttonContainer">
        <CatButton 
          buttonText="More Cats!"
          onClick={()=>{getCat()}}
        >
        </CatButton>
      </div>
    </div>
  );
}

export default App;
