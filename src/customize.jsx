import { useEffect } from "react";

/* eslint-disable react/prop-types */
export default function CustomizeComponent({
  myColor,
  setMyColor,
  myFont,
  setMyFont,
  fontColor,
  setFontColor,
  contentColor,
  setContentColor,
}) {
  useEffect(() => {
    let activeFont = document.querySelector(".activeFont");
    if (activeFont) {
      activeFont.style.backgroundColor = myColor;
    }

    let resumeDisplay = document.querySelector("#resumeSection");
    if (resumeDisplay) {
      resumeDisplay.style.color = fontColor;
    }

    let contentDisplay = document.querySelector("#resumeSection");
    if (contentDisplay) {
      contentDisplay.style.backgroundColor = contentColor;
    }
  }, [myColor, fontColor, contentColor]);

  useEffect(() => {
    const currentActive = document.querySelector(".activeFont");
    if (currentActive) {
      currentActive.classList.remove("activeFont");
    }

    const newActive = document.querySelector("#" + myFont);
    if (newActive) {
      newActive.classList.add("activeFont");
    }
  });

  function SetSerif() {
    setMyFont("serif");
  }

  function SetSans() {
    setMyFont("sans-serif");
  }

  function SetMono() {
    setMyFont("monospace");
  }

  return (
    <div id="customizeSectionContainer">
      <div id="colorPickerContainer">
        <div className="customizeHeading">Color</div>
        <div id="colorPickerCard">
          <div id="colorPickerCardLeft">
            <label htmlFor="colorPicker">Pick Heading color</label>
            <label htmlFor="colorPickerContent">Pick Content Color</label>
            <label htmlFor="fontColorPicker">Pick Font color</label>
          </div>
          <div id="colorPickerCardRight">
            <input
              type="color"
              id="colorPicker"
              value={myColor}
              onChange={(e) => setMyColor(e.target.value)}
            />
            <input
              type="color"
              id="colorPicker"
              value={contentColor}
              onChange={(e) => setContentColor(e.target.value)}
            />
            <input
              type="color"
              id="colorPicker"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div id="fontContainer">
        <div className="customizeHeading">Fonts</div>
        <div id="fontsCard">
          <div
            className="fontCase"
            id="serif"
            onClick={() => {
              SetSerif();
            }}
          >
            <div className="fontExample">Aa</div>
            <div className="fontName">Serif</div>
          </div>
          <div
            className="fontCase"
            id="sans-serif"
            onClick={() => {
              SetSans();
            }}
          >
            <div className="fontExample">Aa</div>
            <div className="fontName">sans-Serif</div>
          </div>
          <div
            className="fontCase"
            id="monospace"
            onClick={() => {
              SetMono();
            }}
          >
            <div className="fontExample">Aa</div>
            <div className="fontName">Mono</div>
          </div>
        </div>
      </div>
    </div>
  );
}
