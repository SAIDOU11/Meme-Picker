import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOptions = document.getElementById("gifs-only-options");
const memeModal = document.getElementById("meme-modal");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");

emotionRadios.addEventListener("change", highlightCheckedOption);

memeModalCloseBtn.addEventListener("click", () => {
  memeModal.style.display = "none";
});

getImageBtn.addEventListener("click", renderCat);

function highlightCheckedOption(e) {
  let radios = document.getElementsByClassName("radio");
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function renderCat() {
  const catObject = getSingleCatObject();
  memeModalInner.innerHTML = `<img 
  class="cat-img" 
  src="./images/${catObject.image}"
  alt="${catObject.alt}"
  >`;
  memeModal.style.display = "flex";
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();
  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
    const randomNumber = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomNumber];
  }
}

function getMatchingCatsArray() {
  if (document.querySelector("input[type='radio']:checked")) {
    const checkedEmotion = document.querySelector(
      "input[type='radio']:checked"
    ).value;
    const isGif = gifsOnlyOptions.checked;
    const matchingCatArray = catsData.filter((cat) => {
      if (isGif) {
        return cat.emotionTags.includes(checkedEmotion) && cat.isGif;
      } else {
        return cat.emotionTags.includes(checkedEmotion);
      }
    });
    return matchingCatArray;
  }
}

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  let radioItem = "";
  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    radioItem += `
    <div class="radio">  
    <label for="${emotion}">${emotion}</label>
    <input type="radio" name="one-choice" value="${emotion}" id="${emotion} "/>
    </div>
    `;
  }
  emotionRadios.innerHTML = radioItem;
}

renderEmotionsRadios(catsData);
