let image=document.querySelector(".productImage");
let q=document.querySelector("#num");
console.log(q.value);

image.style.backgroundImage = "url('71JMDJLzRDL._SY625_.jpg')";
function c1(){
    image.style.backgroundImage = "url('71JMDJLzRDL._SY625_.jpg')";
}
function c2(){
    image.style.backgroundImage = "url('Beige shoe.jpg')";
}
function c3(){
    image.style.backgroundImage = "url('blackred.jpg')";
}
function c4(){
    image.style.backgroundImage = "url('Dgrey.jpg')";
}
function c5(){
    image.style.backgroundImage = "url('navy.jpg')";
}
function c6(){
    image.style.backgroundImage = "url('olive.jpg')";
}
function blurPage() {
    if(document.getElementById("selectedSizeDisplay").innerText === "Selected Size: None"){
        document.getElementById("popupmsg").innerText= "Please Select a size";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("popup").style.display = "flex";
    }
    else{
        document.getElementById("overlay").style.display = "block";
        document.getElementById("popupmsg").innerText= "Added to the Cart successfully";
        document.getElementById("popup").style.display = "flex";
    }
}
function unblur(){
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}

let selectedSize = null;

function openSizePopup() {
  document.getElementById("sizeOverlay").style.display = "block";
}

function closeSizePopup() {
  document.getElementById("sizeOverlay").style.display = "none";
}

function selectSize(size) {
  selectedSize = size;
  document.getElementById("selectedSizeDisplay").innerText = "Selected Size: " + size;
  closeSizePopup();
}

let popupImgBox = document.querySelector(".cartimage");

function openCart(){
    document.getElementById("overlay").style.display = "block";
    document.querySelector(".mycart").style.display= "flex";
}

function closeCart(){
    document.getElementById("overlay").style.display = "none";
    document.querySelector(".mycart").style.display= "none";
}

function itemAdded(){
    if(document.getElementById("selectedSizeDisplay").innerText === "Selected Size: None"){
        return;
    }
    let bg = window.getComputedStyle(image).backgroundImage;
    let imageUrl = bg.slice(5, -2);
    popupImgBox.style.backgroundImage = `url('${imageUrl}')`;
    popupImgBox.style.backgroundSize = "contain";
    popupImgBox.style.backgroundRepeat = "no-repeat";
    popupImgBox.style.backgroundPosition = "center";
    document.querySelector(".selectedSize").innerText= document.getElementById("selectedSizeDisplay").innerText;
    let amt=document.querySelector(".amtBox").innerText= "Amount= $"+q.value*99.9;
}

function itemRemoved(){
    popupImgBox.style.backgroundImage = "none";
    document.querySelector(".selectedSize").innerText= "Selected Size: None";
    let amt=document.querySelector(".amtBox").innerText= "Amount= $"+q.value*0;
}