import React, { useState } from "react";
import { ReactComponent as Hello } from "./hello.svg";
import { ReactComponent as Curve } from "./curve.svg";
import { ReactComponent as Line } from "./line.svg";
import "./index.css";

export default function App() {
  const [curr, setCurr] = useState();
  const play = () => {
    const elem = document.querySelector("svg > path");
    elem.style.animation = "none";
    setTimeout(() => {
      elem.style.setProperty("animation", "sign 4s ease forwards");
    }, 1);
  };
  const changeCursor = (url) => {
    const root = document.querySelector("body");
    root.style.cursor = `url(${url}),auto`;
    console.log(root.style.cursor, url);
  };
  return (
    <div className="App">
      {/* <Hello />
      <Curve /> */}
      <nav role="navigation">
        <ul>
          <li>
            <a href="/">select</a>
            <ul className="dropdown">
              <li>
                <span onClick={() => setCurr("hello")}>hello</span>
              </li>
              <li>
                <span onClick={() => setCurr("curve")}>curve</span>
              </li>
              <li>
                <span onClick={() => setCurr("line")}>line</span>
              </li>
            </ul>
          </li>
        </ul>
        <li onClick={play}>play</li>
        <ul>
          <li>
            <a href="/">cursor</a>
            <ul className="dropdown">
              <li>
                <span
                  onClick={() =>
                    changeCursor(
                      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png"
                    )
                  }
                >
                  Hand1
                </span>
              </li>
              <li>
                <span
                  onClick={() =>
                    changeCursor(
                      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png"
                    )
                  }
                >
                  Hand2
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div>
        {curr === "hello" ? <Hello /> : curr === "curve" ? <Curve /> : <Line />}
      </div>
    </div>
  );
}
