var commentCounter = 1;
var likeCounter = 1;

function commentHere() {
    // create new element
    const newElement = document.createElement("div");
    newElement.textContent = "User Comment ..." + commentCounter; //concatnate the commentCounter

    // add styling to new element
    newElement.style.background = "royalblue"; // values must be in double quotes or single quote
    newElement.style.color = "white";
    newElement.style.margin = "4px";

    // Comment box element
    const commentBox = document.querySelector("#commentBox");

    // apend the new element to parent
    commentBox.appendChild(newElement);

    // increment the comment comment Counter
    commentCounter++;
}

function likeHere() {
    likeCounter++;

    let btnElement = document.querySelector("#btnid");
    btnElement.innerHTML = "Like" + likeCounter;
}