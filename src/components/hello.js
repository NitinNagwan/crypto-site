// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://crypto-news-live3.p.rapidapi.com/news',
//   headers: {
//     'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
//     'X-RapidAPI-Key': '2b944f0273msh634d19693fe34bcp1ad8cdjsna013a9bb9c8a'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
import React from "react";
import { Button } from "antd";
import { saveAs } from "file-saver";
import News from "./News";

const Index = () => {
  const downloadImage = () => {
    saveAs(
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      "image.jpg"
    ); // Put your image url here.
  };

  return (
    <>
      {/* <Button onClick={downloadImage}>Download!</Button> */}
      <a href="logo192.png" download="myw3schoolsimage">
        <img
          src="logo192.png"
          alt="W3Schools"
          width="104"
          height="142"
        />
      </a>
    </>
  );
};

if(News.image){
  if(News.image.thumbnail){
    if(News.image.thumbnail.contentUrl){
      

    }else{

    }

  }else{

  }

}
else{

}
export default Index;
