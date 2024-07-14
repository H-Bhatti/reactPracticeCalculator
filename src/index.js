import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./cards";

const data = [
  {
    imageSrc: "Rick & Morty",
    sName: "https://www.netflix.com/title/80014749",
    sLink: "https://wallpapercave.com/uwp/uwp4412040.jpeg",
  },
  {
    imageSrc: "Stranger Things",
    sName: "https://www.netflix.com/title/80057281",
    sLink: "https://wallpapercave.com/uwp/uwp3621169.png",
  },
  {
    imageSrc: "breaking Bad",
    sName: "https://www.netflix.com/title/70143836",
    sLink: "https://wallpapercave.com/fuwp/uwp4353669.jpeg",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Card
      imageSrc="https://wallpapercave.com/uwp/uwp4412040.jpeg"
      sName="Rick & Morty"
      sLink="https://www.netflix.com/title/80014749"
    />
    <Card
      sName="breaking Bad"
      sLink="https://www.netflix.com/title/70143836"
      imageSrc="https://wallpapercave.com/fuwp/uwp4353669.jpeg"
    />
    <Card
      sName="Stranger Things"
      sLink="https://www.netflix.com/title/80057281"
      imageSrc="https://wallpapercave.com/uwp/uwp3621169.png"
    />
  </>
);
