export default function CustomizeComponent({myfont, setMyFont, myColor, setMyColor}) {
    return (
        <div id="customizeSectionContainer">
            <div id="colorPickerContainer">
                <div className="customizeHeading">Color</div>
                <div id="colorPickerCard">
                    <label htmlFor="colorPicker">Pick a color</label>
                    <input type="color" id="colorPicker" value={myColor} onChange={(e) => setMyColor(e.target.value)}/>
                </div>
            </div>
            <div id="fontContainer">
                <div className="customizeHeading">Fonts</div>
            </div>
        </div>
    )
}