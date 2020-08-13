var counter = 1;
var likeCounter = 1;

/**
 * Create a Comment Element
 * and
 * Append to Comment Box
 *
 */

function commentHere() {
    // newelement initialization
    let newelement = document.createElement("div")
    newElement.textContent = "commment" + counter;

    // styling
    newElement.style.background = "tomato";
    newelement.style.margin = "4px";

    // appending to the parent Box
    let commentBox = document.queySelector("#commentBox");
    commentBox.appendChild(newElement);

    counter++;
}

function likeHere() {
    likeCounter++;

    document.queySelector("#likedid").innerHTML = "Like" + likeCounter;
}