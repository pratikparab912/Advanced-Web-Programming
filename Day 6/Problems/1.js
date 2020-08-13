var likeCounter = 1;

function commentHere() {
    let userComment = document.querySelector("#inputId1").value;

    const newElement = document.createElement("div")
    newElement.textContent = userComment;

    newElement.style.background = "royalblue";
    newElement.style.background = "white";
    newElement.style.margin = "4px";

    const commntBox = document.querySelector("#commentBox");

    commentBox.insertBefore(newElement, commentBox.firstChild);

    document.querySelector("#inputId1").value = "";
}

function likeHere() {
    likeCounter++;

    let btnElement = document.querySelector("#btnid");
    btnElement.innerHTML = "Like " + likeCounter;
}