import html2canvas from "html2canvas";

export default function ResumeScreenshot() {
  let displaySection = document.querySelector("#displaySection");
  html2canvas(displaySection).then((canvas) => {
    let screenshot = canvas.toDataURL("image/png");
    console.log(screenshot);
    let downloadLink = document.createElement("a");
    downloadLink.download = "captured-image.png";
    downloadLink.href = screenshot;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    alert("Your Resume has been Downloaded!")
  });
}
