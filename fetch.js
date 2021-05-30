myListLen = myList.length;

for (var i = 0; i < myListLen; i++) {
  shivaParaText = myList[i].Text;
  shivaAudoSrc = myList[i].audoSrc;

  mainDiv = document.createElement("div");
  mainDiv.className = "container ";
  childDiv = document.createElement("div");
  para = document.createElement("p");
  para.className = "para_text";
  para.innerHTML = shivaParaText;
  childDiv.appendChild(para);

  audio = document.createElement("AUDIO");
  audio.setAttribute("controls", "src");
  audio.setAttribute("src", shivaAudoSrc);
  audio.setAttribute("controlsList", "nodownload");
  audio.className = "audio";

  mainDiv.appendChild(childDiv);
  mainDiv.appendChild(audio);
  document.body.appendChild(mainDiv);
}

window.addEventListener("load", function () {
  setTimeout(function () {
    // This hides the address bar:
    window.scrollTo(0, 1);
  }, 0);
});

// window.addEventListener("load", function () {
//   setTimeout(function () {
//     // This hides the address bar:
//     window.scrollTo(0, 1);
//   }, 0);
// });

//original//
// for (var i = 0; i < myListLen; i++) {
//   slokaTittle = myList[i].Tittle;
//   slokaParaText = myList[i].Text;
//   slokaAudoSrc = myList[i].audoSrc;
//   newDiv = document.createElement("div");
//   childDiv = document.createElement("div");
//   newDiv.id = "container";
//   newDiv.className = "chapter";
//   h2Text = document.createElement("h2");
//   h2Text.innerText = slokaTittle;
//   audio = document.createElement("AUDIO");
//   audio.setAttribute("controls", "src");
//   audio.setAttribute("src", slokaAudoSrc);
//   audio.setAttribute("controlsList", "nodownload");
//   newDiv.appendChild(h2Text);
//   childDiv.innerHTML = slokaParaText;
//   newDiv.appendChild(childDiv);
//   newDiv.appendChild(audio);
//   document.body.appendChild(newDiv);
// }
