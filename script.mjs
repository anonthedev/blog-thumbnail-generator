const canvas = document.getElementById("canvas");
const canvasDiv = document.getElementById("canvas-div");
const ctx = canvas.getContext("2d");
const heightWidthEl = document.getElementById("height-width");
const heightInput = document.getElementById("height-input");
const widthInput = document.getElementById("width-input");
const heightWidthNext = document.getElementById("height-width-next-btn");

const blogTitleEl = document.getElementById("blog-title");
const titleInput = document.getElementById("title-input");
const titleNext = document.getElementById("title-next-btn");
const fontSelector = document.getElementById("font-selector");
const fontColorInput = document.getElementById("font-color-input");
const titleBack = document.getElementById("title-back-btn");

const bgEl = document.getElementById("bg");
const bgInput = document.getElementById("bg-input");
const bgSelector = document.getElementById("bg-select");
const bgNextBtn = document.getElementById("bg-next-btn");
const bgBackBtn = document.getElementById("bg-back-btn");

const bgDisplayEl = document.getElementById("bg-display");
const bgDisplayNextBtn = document.getElementById("bg-display-next-btn");
const bgDisplayBackBtn = document.getElementById("bg-display-back-btn");
const bgDisplayImgs = document.getElementById("bg-display-imgs");
// const bgDisplayImg = document.querySelector("#img1");

const canvasBack = document.getElementById("canvas-back-btn");
const downloadBtn = document.getElementById("download-btn");

import motivational from "./motivational.mjs";
import tech from "./tech.mjs";
import story from "./story.mjs";
import buisness from "./buisness.mjs";

let canvasHeight;
let canvasWidth;
let bgTheme;

function make() {
  canvasDiv.style.display = "none";
  blogTitleEl.style.display = "none";
  bgEl.style.display = "none";
  // bgDisplayEl.style.display = "none";

  heightWidthNext.addEventListener("click", () => {
    canvasHeight = heightInput.value;
    canvasWidth = widthInput.value;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    if (heightInput.value != "" && widthInput.value != "") {
      heightWidthEl.style.display = "none";
      bgEl.style.display = "flex";
    }
  });

  bgNextBtn.addEventListener("click", () => {
    if (bgInput.value === "") {
      bgTheme = bgSelector.value;

      let imgURL = bgTheme[Math.floor(Math.random() * bgTheme.length)];

      console.log(imgURL);

      if (bgTheme === "motivational") {
        let imgURL =
          motivational[Math.floor(Math.random() * motivational.length)];
        let img = new Image();
        img.src = `${imgURL}`;
        img.onload = function () {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      } else if (bgTheme === "tech") {
        let imgURL = tech[Math.floor(Math.random() * tech.length)];
        let img = new Image();
        img.src = `${imgURL}`;
        img.onload = function () {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      } else if (bgTheme === "story") {
        let imgURL = story[Math.floor(Math.random() * story.length)];
        let img = new Image();
        img.src = `${imgURL}`;
        img.onload = function () {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      } else if (bgTheme === "buisness") {
        let imgURL = buisness[Math.floor(Math.random() * buisness.length)];
        let img = new Image();
        img.src = `${imgURL}`;
        img.onload = function () {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      }

      // function createImageNode(fileName) {
      //   const img = new Image();
      //   img.src = fileName;
      //   img.id = 'desiredId'
      //   return img;
      // }

      // if (bgTheme === "motivational") {
      //   motivational.forEach((imgURL) => {
      //     bgDisplayImgs.appendChild(createImageNode(imgURL));
      //   });

      //   console.log(bgDisplayImg)
      //     // bgDisplayImg.addEventListener("click", (index) => {
      //     //   console.log(index);
      //     // });
      // }
    } else {
      let bgColor = bgInput.value;
      ctx.fillStyle = `${bgColor}`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    bgEl.style.display = "none";
    blogTitleEl.style.display = "flex";
    // bgDisplayEl.style.display = "flex";
  });

  titleNext.addEventListener("click", () => {
    let blogTitle = titleInput.value;
    let selectedFont = fontSelector.value;
    let fontColor = fontColorInput.value;
    ctx.textAlign = "center";
    ctx.font = `64px ${selectedFont}, sans-serif`;
    ctx.fillStyle = `${fontColor}`;
    ctx.fillText(`${blogTitle}`, canvas.width / 2, canvas.height / 2);

    if (
      titleInput.value !== "" &&
      fontColorInput.value != "" &&
      fontSelector.value !== ""
    ) {
      heightWidthEl.style.display = "none";
      blogTitleEl.style.display = "none";
      canvasDiv.style.display = "flex";
    }
  });

  titleBack.addEventListener("click", () => {
    bgEl.style.display = "flex";
    blogTitleEl.style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  canvasBack.addEventListener("click", () => {
    blogTitleEl.style.display = "flex";
    bgEl.style.display = "flex";
    canvasDiv.style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  bgBackBtn.addEventListener("click", () => {
    heightWidthEl.style.display = "flex";
    bgEl.style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  downloadBtn.addEventListener("click", () => {
    image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    var link = document.createElement("a");
    link.download = "blog-thumbnail.png";
    link.href = image;
    link.click();
  });
}

make();

// ctx.fillRect(20, 20, 150, 100)
