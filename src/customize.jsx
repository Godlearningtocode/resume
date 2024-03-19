import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function CustomizeComponent({
  myColor,
  setMyColor,
  myFont,
  setMyFont,
  fontColor,
  setFontColor
}) {  
  useEffect(() => {
    let activeFont = document.querySelector(".activeFont");
    if (activeFont) {
      activeFont.style.backgroundColor = myColor;
    } 

    let resumeDisplay = document.querySelector('#resumeSection');
    if(resumeDisplay) {
      resumeDisplay.style.color = fontColor
    }

  }, [myColor, fontColor]);

  useEffect(() => {
    const currentActive = document.querySelector('.activeFont');
    if(currentActive) {
      currentActive.classList.remove('activeFont')
    } 

    const newActive = document.querySelector('#' + myFont);
    if(newActive) {
      newActive.classList.add('activeFont')
    }
  })

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
          <label htmlFor="colorPicker">Pick a color</label>
          <input
            type="color"
            id="colorPicker"
            value={myColor}
            onChange={(e) => setMyColor(e.target.value)}
          />
        </div>
      </div>
      <div id="fontContainer">
        <div className="customizeHeading">Fonts</div>
        <div id="fontsCard">
          <div className="fontCase" id="serif" onClick={() => {SetSerif()}}>
            <div className="fontExample">Aa</div>
            <div className="fontName">Serif</div>
          </div>
          <div className="fontCase" id="sans-serif" onClick={() => {SetSans()}}>
            <div className="fontExample">Aa</div>
            <div className="fontName">sans-Serif</div>
          </div>
          <div className="fontCase" id="monospace" onClick={() => {SetMono()}}>
            <div className="fontExample">Aa</div>
            <div className="fontName">Mono</div>
          </div>
        </div>
        <div id="fontColor">
          <label htmlFor="fontColorPicker">Pick Font color</label>
          <input type="color" id="colorPicker" value={fontColor} onChange={(e) => setFontColor(e.target.value)} />
        </div>
      </div>
    </div>
  );
}
