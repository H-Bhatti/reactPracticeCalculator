import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./cards";

const data = [
  {
    sName: "Rick & Morty",
    sLink: "https://www.netflix.com/title/80014749",
    imageSrc: "https://wallpapercave.com/uwp/uwp4412040.jpeg",
  },
  {
    sName: "Stranger Things",
    sLink: "https://www.netflix.com/title/80057281",
    imageSrc: "https://wallpapercave.com/uwp/uwp3621169.png",
  },
  {
    sName: "breaking Bad",
    sLink: "https://www.netflix.com/title/70143836",
    imageSrc: "https://wallpapercave.com/fuwp/uwp4353669.jpeg",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Card
      sName={data[0].sName}
      sLink={data[0].sLink}
      imageSrc={data[0].imageSrc}
    />
    <Card
      sName={data[1].sName}
      sLink={data[1].sLink}
      imageSrc={data[1].imageSrc}
    />
    <Card
      sName={data[2].sName}
      sLink={data[2].sLink}
      imageSrc={data[2].imageSrc}
    />
  </>
);
