const img=[
    "download.jpeg",
    "f1.jpeg",
    "f2.jpeg"
]
const container=document.getElementById("container")
function renderImg(){
    let imgDOM=""
    for (let i=0;i<img.length;i++){
        imgDOM+= `<img class="team-img" src=${img[i]}>`
    }
    container.innerHTML=imgDOM;
}
renderImg();