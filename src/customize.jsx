export default function CustomizeComponent({
  myColor,
  setMyColor,
    myFont, 
    setMyFont
}) {
  function SetSerif() {
    setMyFont("serif");
  }

  function SetSans() {
    setMyFont("sans-serif");
  }

  function SetMono() {
    setMyFont("monospace")
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
          <div className="fontCase">
            <div className="fontExample">Aa</div>
            <div className="fontName" onClick={SetSerif}>
              Serif
            </div>
          </div>
          <div className="fontCase">
            <div className="fontExample">Aa</div>
            <div className="fontName" onClick={SetSans}>
              sans-Serif
            </div>
          </div>
          <div className="fontCase">
            <div className="fontExample">Aa</div>
            <div className="fontName" onClick={SetMono}>
              Mono
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
