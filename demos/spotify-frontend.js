//import {speedChange, setCover} from "./animation-svg.js";

const coverImage = document.querySelector("#vinylCover");
function setCover(imgUrl) {
  coverImage.setAttribute("xlink:href", String(imgUrl));
}

async function currentlyPlaying() {
  try
  {
  let fetched = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
      'Authorization':
        "Bearer " +
        "BQCkPpuY4MSXhy5X8d3PiRjbe3nm_N16j2vTOJCWLTbfY8M0lXFTyJ0mV1RvCw2NbEf96iNpMkiZyfHwUefCAwZLQIf6Bm8pW0Hl7mC2PWZbSzR08diWLiXgQjH0zyWi380WqBEPrgEU5G2yOTfzsQLIWgHR",
    },
  });
  let jsonObj = await fetched.json();
  console.log(jsonObj);
  setCover(jsonObj.item.album.images[0].url);
  
} catch(ex) 
{
  console.log(ex);
}
}
