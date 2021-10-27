console.log("music player");
const audio = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.querySelector("#play");
const artist = document.querySelector("#artist");
const title = document.querySelector("#title");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const reciter = document.querySelector("#reciter");
let surahIndex = 0;
console.log(reciter.value);
// surah url generator
let reciterValue = "huthayfi";
let surahName = ["Al-Faatiha","Al-Baqara","Aal-i-Imraan","An-Nisaa","Al-Maaida","Al-An'aam","Al-A'raaf","Al-Anfaal","At-Tawba","Yunus","Hud","Yusuf","Ar-Ra'd","Ibrahim","Al-Hijr","An-Nahl","Al-Israa","Al-Kahf","Maryam","Taa-Haa","Al-Anbiyaa","Al-Hajj","Al-Muminoon","An-Noor","Al-Furqaan","Ash-Shu'araa","An-Naml","Al-Qasas","Al-Ankaboot","Ar-Room","Luqman","As-Sajda","Al-Ahzaab","Saba","Faatir","Yaseen","As-Saaffaat","Saad","Az-Zumar","Ghafir","Fussilat","Ash-Shura","Az-Zukhruf","Ad-Dukhaan","Al-Jaathiya","Al-Ahqaf","Muhammad","Al-Fath","Al-Hujuraat","Qaaf","Adh-Dhaariyat","At-Tur","An-Najm","Al-Qamar","Ar-Rahmaan","Al-Waaqia","Al-Hadid","Al-Mujaadila","Al-Hashr","Al-Mumtahana","As-Saff","Al-Jumu'a","Al-Munaafiqoon","At-Taghaabun","At-Talaaq","At-Tahrim","Al-Mulk","Al-Qalam","Al-Haaqqa","Al-Ma'aarij","Nooh","Al-Jinn","Al-Muzzammil","Al-Muddaththir","Al-Qiyaama","Al-Insaan","Al-Mursalaat","An-Naba","An-Naazi'aat","Abasa","At-Takwir","Al-Infitaar","Al-Mutaffifin","Al-Inshiqaaq","Al-Burooj","At-Taariq","Al-A'laa","Al-Ghaashiya","Al-Fajr","Al-Balad","Ash-Shams","Al-Lail","Ad-Dhuhaa","Ash-Sharh","At-Tin","Al-Alaq","Al-Qadr","Al-Bayyina","Az-Zalzala","Al-Aadiyaat","Al-Qaari'a","At-Takaathur","Al-Asr","Al-Humaza","Al-Fil","Quraish","Al-Maa'un","Al-Kawthar","Al-Kaafiroon","An-Nasr","Al-Masad","Al-Ikhlaas","Al-Falaq","An-Naas",];
// storing url 114 surahs
let surahs = [];
// it for initially load
function storeUrl() {
  for (let surahNo = 1; surahNo < 115; surahNo++) {
    // console.log(reciterValue);
    if (surahNo < 10) {
      surahs.push(
        `https://download.quranicaudio.com/quran/${reciterValue}/00${surahNo}.mp3`
      );
    } else if (surahNo < 100) {
      surahs.push(
        `https://download.quranicaudio.com/quran/${reciterValue}/0${surahNo}.mp3`
      );
    } else {
      surahs.push(
        `https://download.quranicaudio.com/quran/${reciterValue}/${surahNo}.mp3`
      );
    }
  }
}
storeUrl();
let surahInfo = surahs.map(function (url, index) {
  return { surahUrl: url, suraName: surahName[index], suraNo: index + 1 };
});
// console.log(surahInfo);

// it is for on changing reciter
reciter.addEventListener("change", () => {
  reciterValue = reciter.value;
  surahs = [];
  storeUrl();
  // surahInfo=[]
  surahInfo = surahs.map(function (url, index) {
    return { surahUrl: url, suraName: surahName[index], suraNo: index + 1 };
  });
  // console.log(reciter.options[0].textContent);
  // console.log(surahInfo);
  tex = reciter.options[reciter.selectedIndex].text;
  if (tex != "Select Qari") {
    surahIndex = 0;
    loadSong(surahInfo[surahIndex]);
    artist.innerText = tex;
  }

  console.log(tex);
});

// Selecting surah in drop down menu
let search = document.querySelector("#search");
// let div=document.createElement('div')
let html = "<option value=0 >SELECT SURAH</option>";
surahInfo.forEach((surah, index) => {
  html += `<option value=${index + 1}>${surah.suraNo}. surah ${
    surah.suraName
  }</option> `;
});
search.innerHTML = html;
// console.log(search);
search.addEventListener("change", () => {
  searchValue = search.options[search.selectedIndex].value;
  if (searchValue != 0) {
    surahIndex = searchValue - 1;
    loadSong(surahInfo[surahIndex]);
    // console.log(searchValue);
  }
  // for again it shows 'Select Sura'
  setTimeout(() => {
    search.innerHTML = html;
  }, 1000);
});

// working of volume button on changing the value of input type range
// initially voume is .5
audio.volume = 0.5;
let volInput = document.querySelector(".vol-input");
let volImg = document.querySelectorAll(".vol-img");
// console.log(volImg);
volInput.addEventListener("input", () => {
  let volInputValue = volInput.value / 100;
  console.log(volInputValue);
  // audio.volume=.32;
  if (volInputValue == 0) {
    audio.volume = volInputValue;
    volImg[0].classList.remove("remove");
    volImg[1].classList.add("remove");
    volImg[2].classList.add("remove");
    volImg[3].classList.add("remove");
  } else if (volInputValue < 0.2) {
    audio.volume = volInputValue;
    volImg[0].classList.add("remove");
    volImg[1].classList.remove("remove");
    volImg[2].classList.add("remove");
    volImg[3].classList.add("remove");
    console.log("img1");
  } else if (volInputValue < 0.6) {
    audio.volume = volInputValue;
    volImg[0].classList.add("remove");
    volImg[1].classList.add("remove");
    volImg[2].classList.remove("remove");
    volImg[3].classList.add("remove");
    // console.log(volImg[1].classList);
  } else {
    audio.volume = volInputValue;
    volImg[0].classList.add("remove");
    volImg[1].classList.add("remove");
    volImg[2].classList.add("remove");
    volImg[3].classList.remove("remove");
  }
});
// console.log(volImg[1].classList);

//onclicking shuffle button random audio is playing and togglinng bet shuffle and nonshuffle
let shuffle = document.querySelector(".shuffle");
let shuffleBlack = document.querySelector(".shuffle-black");
let shuffleWhite = document.querySelector(".shuffle-white");

// `````````````````shuffle``````````
let isShuffle = false;
function randomIndexNoPlay() {
  let randomIndexNo = Math.floor(Math.random() * 114 + 1);
  surahIndex = randomIndexNo;
  // console.log(surahIndex);
  loadSong(surahInfo[randomIndexNo]);
}
shuffleOn = () => {
  isShuffle = true;
  shuffleWhite.style.display = "inline";
  shuffleBlack.style.display = "none";
  shuffle.style.backgroundColor = "rgb(0,0,0)";
  shuffle.style.padding = "1.4rem";
  // stop addeventlistener on nextSong to prevent play next audio
  audio.removeEventListener("ended", nextSong);
  // after ending current surah next is also random surah
  audio.addEventListener("ended", randomIndexNoPlay);
};
shuffleOff = () => {
  isShuffle = false;
  shuffleWhite.classList.remove("remove");
  shuffleWhite.style.display = "inline";
  shuffleBlack.style.display = "none";
  shuffle.style.background = "none";
  shuffle.style.padding = "1.3rem";
  console.log(surahIndex);
  audio.removeEventListener("ended", randomIndexNoPlay);
  // if 'isRepeat'is on value is then both nextSong() working repeatOn() is not working
  if (!isRepeat) {
    audio.addEventListener("ended", nextSong);
  }
};

shuffle.addEventListener("click", () => {
  // console.log(isShuffle);
  isShuffle ? shuffleOff() : shuffleOn();
});
// ``````````````shuffle ending```````````

// ~~~~~~~~~~~~~~repeat audio~~~~~~~~~~
let repeat = document.querySelector(".repeat");
let repeatOne = document.querySelector(".repeat-one");
let repeatWhite = document.querySelector(".repeat-white");
let repeatBlack = document.querySelector(".repeat-black");
let isRepeat = false;
function repeatCurrentAudio() {
  let currIndex = surahIndex;
  // if shuffle is on make it as not working
  if (isShuffle==true) {
    audio.removeEventListener("ended", randomIndexNoPlay);
  } 
  // console.log(currIndex, "currIndex");
  
  loadSong(surahInfo[currIndex]);
  console.log(currIndex, "currIndex");
}

repeatOn = () => {
  console.log('repeat on');
  if (isShuffle==true) {
    audio.removeEventListener("ended", randomIndexNoPlay);
  } 
    
  isRepeat = true;
  audio.addEventListener("ended", repeatCurrentAudio);
  audio.removeEventListener("ended", nextSong);

  repeat.style.padding = "1rem";
  repeatOne.style.display = "inline";
  repeatBlack.style.display = "none";
  repeatWhite.style.display = "none";
  repeat.addEventListener("mouseover", () => {
    repeatBlack.style.display = "inline";
    repeatOne.style.display = "none";
  });
  repeat.addEventListener("mouseout", () => {
    repeatBlack.style.display = "none";
    repeatOne.style.display = "inline";
    repeatWhite.style.display = "none";
  });
};
repeatOff = () => {
  console.log('repeat off');
  isRepeat = false;
  // audio.removeEventListener("ended", repeatCurrentAudio);
  repeatOne.style.display = "none";
  repeatWhite.style.display = "inline";
  repeat.addEventListener("mouseover", () => {
    repeatBlack.style.display = "inline";
    repeatWhite.style.display = "none";
    repeatOne.style.display = "none";
  });
  repeat.addEventListener("mouseout", () => {
    repeatBlack.style.display = "none";
    repeatOne.style.display = "none";
    repeatWhite.style.display = "inline";
  });
  
  // tostop repeat on 
  audio.removeEventListener("ended", repeatCurrentAudio);
  
  // if shuffle is on continue with that
  // only one condition apply upon 'ended' event
  if (isShuffle==true) {
    audio.addEventListener("ended", randomIndexNoPlay);
  } 
  else{
      audio.addEventListener("ended", nextSong);
    }
  };
  
  repeat.addEventListener("click", () => {
    isRepeat ? repeatOff() : repeatOn();
  });
  // ~~~~~~~~~~~~~~repeat End ~~~~~~~~~~
  
  // for toggling between pause and play
  isPlaying = false;
playAudio = () => {
  // console.log('audio playing');
  isPlaying = true;
  if (!undefined) {
    audio.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("rotateImg");
  }
};

pauseAudio = () => {
  isPlaying = false;
  // console.log('audio pause');
  audio.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("rotateImg");
};
play.addEventListener("click", () => {
  console.log("play/pause");
  isPlaying ? pauseAudio() : playAudio();
});

// changing the audio data when clikcing prev or forward
let loadSong = (song) => {
  title.textContent = `${song.suraNo}. ${song.suraName}`;
  audio.src = song.surahUrl;
  playAudio();
};

// surahIndex = 0;
let nextSong = () => {
  // console.log("next button is clicked");
  surahIndex = (surahIndex + 1) % surahs.length;
  console.log(surahIndex);
  loadSong(surahInfo[surahIndex]);
};
let prevSong = () => {
  console.log("prev is clicked");
  surahIndex = (surahIndex - 1 + surahs.length) % surahs.length;
  console.log(surahIndex);
  loadSong(surahInfo[surahIndex]);
};

// progress bar working
let durationTime = document.querySelector("#duration-time");
audio.addEventListener("timeupdate", (event) => {
  // for displaying total duraion of audio
  let timeDuration = event.target.duration;
  let minDuration = Math.floor(timeDuration / 60);
  let secDuration = Math.floor(timeDuration % 60);
  // console.log(timeDuration, minDuration);
  // if cant do like this below it shows the NaN in duration place until loading next audio
  if (timeDuration) {
    if (secDuration < 10) {
      durationTime.innerHTML = `${minDuration}:0${secDuration}`;
    } else {
      durationTime.innerHTML = `${minDuration}:${secDuration}`;
    }
  }

  //for displaying current time
  let currentTime = document.querySelector("#current-time");
  let currTime = event.target.currentTime;
  let minCurrTime = Math.floor(currTime / 60);
  let secCurrTime = Math.floor(currTime % 60);
  // console.log(currTime);

  if (secCurrTime < 10) {
    currentTime.innerHTML = `${minCurrTime}:0${secCurrTime}`;
  } else {
    currentTime.innerHTML = `${minCurrTime}:${secCurrTime}`;
  }

  // for updating progress Bar width according time
  let progress = document.querySelector(".progress");
  widthPercentage = (currTime * 100) / timeDuration;
  // console.log(widthPercentage + "%");
  progress.style.width = `${widthPercentage}%`;
  // event.target.volume=0
});

//seeking onclicking bar
let progress_main_div = document.querySelector(".progress-main-div");
let progress = document.querySelector(".progress");
progress_main_div.addEventListener("click", (event) => {
  let divWidth = progress_main_div.offsetWidth;
  let offsetWidth = event.offsetX;
  // console.log(offsetWidth);
  let percet = offsetWidth / divWidth;
  // console.log(`percet`,percet*100);
  audio.currentTime = audio.duration * percet;
});

// for playing next audio without stopping
audio.addEventListener("ended", nextSong);

// onclicking  fast forward or back skip for 10s
let skipBackward = document.querySelector(".skip-backward");
let skipForward = document.querySelector(".skip-forward");
skipBackward.addEventListener("click", () => {
  audio.currentTime -= 10;
});
skipForward.addEventListener("click", () => {
  audio.currentTime += 10;
});
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
