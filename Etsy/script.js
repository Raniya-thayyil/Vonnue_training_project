let dealEl = document.querySelector(".main-list");
let videosEl = document.querySelector(".videos");
paraEl = document.querySelector(".paragraph");
let discEl = document.querySelector(".description-list");
let btEl = document.querySelectorAll(".bt");
let listEl = document.querySelectorAll(".list-main")
let angleEl = document.querySelectorAll(".fa-angle-down")


let featureList = [
  {
    icon: "",
    feature: "Sellers' Sales Hub",
  },
  {
    icon: "",
    feature: "Jeweller & Accessories",
  },
  {
    icon: "",
    feature: "Clothing & Shoes",
  },
  {
    icon: "",
    feature: "Home & Living",
  },
  {
    icon: "",
    feature: "Wedding & Party",
  },
  {
    icon: "",
    feature: "Toys & Entertainment",
  },
  {
    icon: "",
    feature: "Art & Collectibles",
  },
  {
    icon: "",
    feature: "Craft Supplies",
  },
  {
    icon: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="8.727272727272728" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg>`,
    feature: "Gifts",
  },
];

let items1 = [
  {
    img: "https://i.etsystatic.com/38265228/c/2000/2000/0/0/il/450d24/4786583254/il_300x300.4786583254_ldl0.jpg",
    name: "Eid Sale",
  },
  {
    img: "https://i.etsystatic.com/17600118/c/1498/1498/0/0/il/4f37ae/2328685610/il_300x300.2328685610_basr.jpg",
    name: "Wedding",
  },
  {
    img: "https://i.etsystatic.com/18077312/c/942/942/160/317/il/d621d7/4650996033/il_300x300.4650996033_1jwm.jpg",
    name: "Jewellery",
  },
  {
    img: "https://i.etsystatic.com/18224553/c/715/715/0/64/il/6059f3/3621815742/il_300x300.3621815742_hwc7.jpg",
    name: "Men's Clothing",
  },
  {
    img: "https://i.etsystatic.com/16676438/c/2002/2002/449/0/il/89ea5d/1467855817/il_300x300.1467855817_ksv4.jpg",
    name: "Home & Living",
  },
  {
    img: "https://i.etsystatic.com/19220794/r/il/28ced3/2951466885/il_300x300.2951466885_1ly4.jpg",
    name: "Kitchen & Dining",
  },
];

let dealsList = [
  {
    img: "https://i.etsystatic.com/22368382/r/il/006d21/4245808662/il_300x300.4245808662_a3x4.jpg",
    offer: "Up to 40% off on",
    caption: "Women's Ethnic Clothing",
  },
  {
    img: "https://i.etsystatic.com/32501528/c/1488/1488/0/0/il/23a5b4/3700725057/il_300x300.3700725057_szgj.jpg",
    offer: "Up to 40% off on",
    caption: "Women's Western Clothing",
  },
  {
    img: "https://i.etsystatic.com/25566015/c/2003/2003/0/274/il/5b71e2/3196479462/il_300x300.3196479462_20xh.jpg",
    offer: "Up to 40% off on",
    caption: "Men's Clothing",
  },
  {
    img: "https://i.etsystatic.com/12917913/r/il/7ef5de/4396673299/il_300x300.4396673299_bkgg.jpg",
    offer: "Up to 40% off on",
    caption: "Fashion Jewellery",
  },
  {
    img: "https://i.etsystatic.com/24480679/r/il/d42481/4357242172/il_300x300.4357242172_hmhi.jpg",
    offer: "Up to 40% off on",
    caption: "Women's Shoes",
  },
  {
    img: "https://i.etsystatic.com/23528878/r/il/625e23/2589827894/il_300x300.2589827894_bi5a.jpg",
    offer: "Up to 40% off on",
    caption: "Wedding Clothing",
  },
];

let videosList = [
  {
    img: `https://i.etsystatic.com/22512292/r/il/223848/4118017682/il_794xN.4118017682_5dlg.jpg`,
    video:
      "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Reflection_small_bvojeg.mp4",
    playButton: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M4 4v16l16-8L4 4z" fill="#2F466C"></path>
  </svg>`,
    price: "₹545",
    fav: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`,
    favred: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`,
    type: "video",
  },
  {
    img: "https://i.etsystatic.com/21797687/r/il/5534fc/3743548136/il_794xN.3743548136_ab8u.jpg",
    video: "",
    playButton: "",
    price: "₹545",
    fav: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`,
    favred: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`,
    type: "image",
  },
  {
    img: "https://i.etsystatic.com/11901825/r/il/cb5c18/4169457823/il_794xN.4169457823_jdb1.jpg",
    video: "",
    playButton: "",
    price: "₹545",
    fav: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" 
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
     focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`,
    favred: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`,
    type: "image",
  },

  {
    img: "https://i.etsystatic.com/22512292/r/il/340223/3972862573/il_794xN.3972862573_8a1y.jpg",
    video:
      "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Circle1_t0evjv.mp4",
    playButton: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M4 4v16l16-8L4 4z" fill="#2F466C"></path>
  </svg>`,
    price: "₹545",
    fav: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`,
    favred: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`,
    type: "video",
  },
  {
    img: "https://i.etsystatic.com/33029693/r/il/a9e8ff/4058742721/il_794xN.4058742721_jv5z.jpg",
    video: "",
    playButton: "",
    fav: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`,
    price: "₹545",
    favred: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`,
    type: "image",
  },
  {
    img: "https://i.etsystatic.com/22512292/r/il/1a7775/4188382655/il_794xN.4188382655_mzfv.jpg",
    video:
      "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/MushroomTall1_Framed_jutf4u.mp4",
    playButton: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M4 4v16l16-8L4 4z" fill="#2F466C"></path>
  </svg>`,
    fav: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`,
    price: "₹545",
    favred: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`,

    type: "video",
  },
];

let etsyDescription = [
  {
    head : " A community doing good ",
    paragraph : "Etsy is a global online marketplace, where people come together to make, sell, buy and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet.",
    bottomPara : "Here are some of the ways we’re making a positive impact, together."
  },
  {
    head : " Support independent creators ",
    paragraph : "There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary. ",
    bottomPara : ""
  },
  {
    head : "Peace of mind",
    paragraph : "Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support. ",
    bottomPara : ""
  },
]

let itemsEl = document.getElementById("items");

function imagesList() {
  for (let i = 0; i < items1.length; i++) {
    let itemsDiv = document.createElement("div");
    itemsDiv.classList.add("each-item");
    itemsEl.appendChild(itemsDiv);

    let imgLi = document.createElement("span");
    let imgEl = document.createElement("img");
    itemsDiv.appendChild(imgLi);
    imgLi.appendChild(imgEl);
    imgEl.src = items1[i].img;

    let caption = document.createElement("span");
    caption.classList.add("text");
    itemsDiv.appendChild(caption);
    caption.innerHTML = items1[i].name;
  }
}
imagesList();

let itemsListEl = document.querySelector(".itemslist-main");

function itemsList() {
  let ulEl = document.createElement("ul");
  itemsListEl.appendChild(ulEl);
  ulEl.classList.add("main-list");
  for (let i = 0; i < featureList.length; i++) {
    let liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    let spanEl = document.createElement("span");
    liEl.appendChild(spanEl);
    if (featureList[i].icon === "") {
      spanEl.innerHTML = `${featureList[i].feature}`;
    } else {
      spanEl.innerHTML = `${featureList[i].icon}${featureList[i].feature}`;
    }
  }
}
itemsList();

// function dealsOfDay() {
//     let total = ``;
//     for (let i = 0; i < dealsList.length; i++) {
//       let html = `<ul class="main-list">
//         <li>
//     <img src=${dealsList[i].img}>
//     <a href="">
//     <p>${dealsList[i].offer}</p>
//     <p>${dealsList.dealsList[i].caption}</p>
//     </a>
//     </li>
//     </ul>`;
//     dealEl.innerHTML = html;

//     }
// }

// dealsOfDay();

let dealsArr = dealsList.map(function (item) {
  let html = `
            <li>
        <img src=${item.img}> 
        <a href="">
        <p class = "offer">${item.offer}</p>
        <p class = "cap">${item.caption}</p>
        </a>
        </li>
        `;

  return html;
});
dealEl.innerHTML = dealsArr.join("");

function videosFun() {
  for (let i = 0; i < videosList.length; i++) {
    let videosContainer = document.createElement("div");
    videosContainer.classList.add("each-video", "vd");
    videosEl.appendChild(videosContainer);

    if (videosList[i].type === "video") {
      let artVideo = document.createElement("video");
      videosContainer.appendChild(artVideo);
      artVideo.src = videosList[i].video;
      artVideo.poster = videosList[i].img;

      let playBtn = document.createElement("span");
      videosContainer.appendChild(playBtn);
      playBtn.innerHTML = videosList[i].playButton;

      artVideo.addEventListener("mouseenter", () => {
        artVideo.autoplay = false;
        artVideo.muted = "muted";
        artVideo.play();
      });
      artVideo.addEventListener("mouseleave", () => {
        artVideo.pause();
        artVideo.load();
        artVideo.currentTime = 0;
      });
    } else if (videosList[i].type === "image") {
      let artImage = document.createElement("img");
      videosContainer.appendChild(artImage);
      artImage.src = videosList[i].img;
    }

    let price = document.createElement("span");
    price.classList.add("price");
    videosContainer.appendChild(price);

    let favourite = document.createElement("span");
    videosContainer.appendChild(favourite);
    favourite.classList.add("fava");
    videosContainer.addEventListener("mouseenter", () => {
      // let state = 0;
      price.innerHTML = videosList[i].price;

      favourite.innerHTML = videosList[i].fav;

     
    });
    favourite.addEventListener("click", () => {
      console.log("hello");
     if (videosList[i].favred) {    

       let favourite = document.createElement("span");

       favourite.classList.add("fava");
       videosContainer.appendChild(favourite);

       favourite.innerHTML = videosList[i].favred;
       // state = 1;
     } else {   

       favourite.innerHTML = videosList[i].fav;
      //  favourite.classList.add("fava");

       // videosContainer.appendChild(favourite);
       // favourite.innerHTML = videosList[i].fav;
       // state = 0;
     }
     // console.log(state,"current state");
   });

    videosContainer.addEventListener("mouseleave", () => {
      price.innerHTML = " ";
      favourite.innerHTML = " ";
    });
  }
}

videosFun();

function para() {
  let text = document.createElement("p");
  paraEl.appendChild(text);
  text.innerHTML = "Curate unique pieces that showcase your personality";
}
para();

let description = etsyDescription.map(function(item) {
  let html = `
  <div class = "each-description">
    <h3>
      ${item.head}
    </h3>
    <p>${item.paragraph}</p>
    <a href = "">${item.bottomPara}</a>
  </div>`
  

  return html;
})
discEl.innerHTML = description.join('');

btEl.forEach((item, idx) => {
  item.addEventListener("click", () => {
    listEl[idx].classList.toggle("active");
    angleEl[idx].classList.toggle("active");
  })

})
 
