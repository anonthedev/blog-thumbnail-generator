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

const bgImgPreview = document.getElementById("bg-img-preview-img");

// const bgDisplayEl = document.getElementById("bg-display");
// const bgDisplayNextBtn = document.getElementById("bg-display-next-btn");
// const bgDisplayBackBtn = document.getElementById("bg-display-back-btn");
// const bgDisplayImgs = document.getElementById("bg-display-imgs");

const canvasBack = document.getElementById("canvas-back-btn");
const downloadBtn = document.getElementById("download-btn");

import motivational from "./imgArray/motivational.mjs";
import tech from "./imgArray/tech.mjs";
import story from "./imgArray/story.mjs";
import buisness from "./imgArray/buisness.mjs";
import gymMotivation from "./imgArray/gym.mjs";
import slefHelp from "./imgArray/selfHelp.mjs";

let canvasHeight;
let canvasWidth;
let bgTheme;

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

    if (bgTheme === "motivational") {
      let imgURL =
        motivational[Math.floor(Math.random() * motivational.length)];
      let previewImg = new Image();
      previewImg.src = `${imgURL}`;
      bgImgPreview.appendChild(previewImg);

      let canvasImg = new Image();
      canvasImg.src = `${imgURL}`;
      canvasImg.crossOrigin = "anonymous"
      canvasImg.onload = function () {
        ctx.drawImage(canvasImg, 0, 0, canvas.width, canvas.height);
      };
    } else if (bgTheme === "tech") {
      let imgURL = tech[Math.floor(Math.random() * tech.length)];
      let previewImg = new Image();
      previewImg.src = `${imgURL}`;
      bgImgPreview.appendChild(previewImg);

      let canvasImg = new Image();
      canvasImg.src = `${imgURL}`;
      canvasImg.crossOrigin = "anonymous"
      canvasImg.onload = function () {
        ctx.drawImage(canvasImg, 0, 0, canvas.width, canvas.height);
      };
    } else if (bgTheme === "story") {
      let imgURL = story[Math.floor(Math.random() * story.length)];
      let previewImg = new Image();
      previewImg.src = `${imgURL}`;
      bgImgPreview.appendChild(previewImg);

      let canvasImg = new Image();
      canvasImg.src = `${imgURL}`;
      canvasImg.crossOrigin = "anonymous"
      canvasImg.onload = function () {
        ctx.drawImage(canvasImg, 0, 0, canvas.width, canvas.height);
      };
    } else if (bgTheme === "buisness") {
      let imgURL = buisness[Math.floor(Math.random() * buisness.length)];
      let previewImg = new Image();
      previewImg.src = `${imgURL}`;
      bgImgPreview.appendChild(previewImg);

      let canvasImg = new Image();
      canvasImg.src = `${imgURL}`;
      canvasImg.crossOrigin = "anonymous"
      canvasImg.onload = function () {
        ctx.drawImage(canvasImg, 0, 0, canvas.width, canvas.height);
      };
    } else if (bgTheme === "gym-motivation") {
      let imgURL = gymMotivation[Math.floor(Math.random() * gymMotivation.length)];
      let previewImg = new Image();
      previewImg.src = `${imgURL}`;
      bgImgPreview.appendChild(previewImg);

      let canvasImg = new Image();
      canvasImg.src = `${imgURL}`;
      canvasImg.crossOrigin = "anonymous"
      canvasImg.onload = function () {
        ctx.drawImage(canvasImg, 0, 0, canvas.width, canvas.height);
      };
    } else if (bgTheme === "self-help") {
      let imgURL = slefHelp[Math.floor(Math.random() * slefHelp.length)];
      let previewImg = new Image();
      previewImg.src = `${imgURL}`;
      bgImgPreview.appendChild(previewImg);

      let canvasImg = new Image();
      canvasImg.src = `${imgURL}`;
      canvasImg.crossOrigin = "anonymous"
      canvasImg.onload = function () {
        ctx.drawImage(canvasImg, 0, 0, canvas.width, canvas.height);
      };
    }

    // function createImageNode(fileName, id) {
    //   const img = new Image();
    //   img.src = fileName;
    //   img.id = id;
    //   return img;
    // }
    // motivational.forEach((imgURL, index) => {
    //   bgDisplayImgs.appendChild(createImageNode(imgURL, index));

    //   // bgDisplayImgs.innerHTML = `<img id=${index} src=${imgURL} onClick=${newF}>`
    // }else if (bgTheme === "tech") {
    //   tech.forEach((imgURL, index) => {
    //     bgDisplayImgs.appendChild(createImageNode(imgURL, index));
    //   });
    // } else if (bgTheme === "story") {
    //   story.forEach((imgURL, index) => {
    //     bgDisplayImgs.appendChild(createImageNode(imgURL, index));
    //   });
    // } else if (bgTheme === "buisness") {
    //   buisness.forEach((imgURL, index) => {
    //     bgDisplayImgs.appendChild(createImageNode(imgURL, index));
    //   });
    // }
    // fetch(`https://api.unsplash.com/search/collections?page=1&query=${bgTheme}&client_id=yJcnKwvXHxYgqfGkuRMLUY2Cf8jWe-T2FaIGmq-0-Ms`)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data.results[0])
    //     data.results.map(()=>{
    //       // bgDisplayImgs.appendChild(createImageNode(cover_photo.urls.regular))
    //     })
    //     //
    //   });

    // console.log(bgDisplayImg)
    // bgDisplayImg.addEventListener("click", (index) => {
    //     console.log(index);
    //   });

    // let imgURL = bgTheme[Math.floor(Math.random() * bgTheme.length)];

    // console.log(imgURL);
  } else {
    let bgColor = bgInput.value;
    ctx.fillStyle = `${bgColor}`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  bgEl.style.display = "none";
  blogTitleEl.style.display = "flex";
  // bgDisplayEl.style.display = "none";
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

  while (bgImgPreview.firstChild) {
    bgImgPreview.removeChild(bgImgPreview.firstChild);
  }
});

titleBack.addEventListener("click", () => {
  bgEl.style.display = "flex";
  blogTitleEl.style.display = "none";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  while (bgImgPreview.firstChild) {
    bgImgPreview.removeChild(bgImgPreview.firstChild);
  }
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
  let image = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  var link = document.createElement("a");
  link.download = "blog-thumbnail.png";
  link.href = image;
  link.click();
});

// ctx.fillRect(20, 20, 150, 100)
