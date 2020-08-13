var likeCounter = 1;

function commentHere() {
    let userComment = document.querySelector("#inputId1").value;

    const newElement = document
        .querySelector("#referenceCommentId")
        .cloneNode(true);
    newElement.removeAttribute("id");
    newElement.style.visibility = "visible";
    newElement.children[0].innerHTML = userComment;

    const commentBox = document.querySelector("#commentBox");

    commentBox.insertBefore(newElement, commentBox.firstChild);

    document.querySelector("#inputId1").value = "";
}

function likeHere() {
    likeCounter++;

    let btnElement = document.querySelector("#btnid");
    btnElement.innerHTML = "Like" + likeCounter;
}