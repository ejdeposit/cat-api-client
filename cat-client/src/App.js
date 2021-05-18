import logo from './logo.svg';
import './App.css';
import { getByPlaceholderText } from '@testing-library/dom';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <CatImage></CatImage>
      <CatButton 
        buttonText="push me!"
        onClick={()=>{getCat()}}
      >
      </CatButton>
    </div>
  );
}

function CatImage() {
  const [isCatImage, setIsCatImage] = useState(false);
  const [catURL, setCatURL] = useState("");
  useEffect(() => {
    console.log("get cats here?")
    //let requesturl= "https://thatcopy.pw/catapi/rest/"
    //let options = {
    //    method: 'GET',
    //    headers: { 'Content-Type': 'application/json'},
    //}
    ////body: JSON.stringify({"userid": userid, "password": password})
    //fetch(requesturl, options)
    //.then(response => {
    //    return response.json();
    //})
    //.then(data => {
    //    console.log(data);
    //});
  });

  if(isCatImage){
    return (
      <div>is cat!</div>
    );
  }
  else{
    return(
      <div>
        loading... 
      </div>
    );
  }
}

function CatButton(props) {
  return (
      <div id="button"><button onClick={props.onClick}>{props.buttonText}</button></div>
  );
}
function getCat() {
  console.log("fetch cats")
  let requesturl= "https://thatcopy.pw/catapi/rest/"
  let options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
  }
  //body: JSON.stringify({"userid": userid, "password": password})
  fetch(requesturl, options)
  .then(response => {
      console.log(response)
      return response.json();
  })
  .then(data => {
      console.log(data);
  });
}

export default App;
