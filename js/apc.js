const showIcons = document.getElementsByClassName("share");

function shows(){
    document.querySelector(".share-page").classList.toggle("show");
    document.getElementsByClassName("share-page").style.transition = "all 2s ease";
}