let messagesCount = $("p").length;
$("#count").text(messagesCount);

for (let i = 0; i < document.getElementsByClassName("trash").length; i++) {
  document
    .getElementsByClassName("trash")
    [i].addEventListener("click", function() {
      this.parentNode.remove();
      let messagesCount = $("p").length;
      $("#count").text(messagesCount);
    });
}

document.getElementById("btn-add").addEventListener("click", function() {
  //console.log(document.getElementById("add-message").value);

  let mainDiv = document.createElement("div");
  mainDiv.className = "row";
  document.body.appendChild(mainDiv);

  let image = document.createElement("img");
  image.className = "avatar";
  image.src = "images/avatar-2.jpg";
  mainDiv.appendChild(image);

  let nameMessageDiv = document.createElement("div");
  mainDiv.appendChild(nameMessageDiv);

  let h6 = document.createElement("h6");
  h6.textContent = "Saïda Zghal";
  nameMessageDiv.appendChild(h6);

  let content = document.createElement("p");
  content.textContent = document.getElementById("add-message").value;
  nameMessageDiv.appendChild(content);

  let trash = document.createElement("img");
  trash.className = "trash";
  trash.src = "images/trash.png";
  mainDiv.appendChild(trash);

  let messagesCount = $("p").length;
  $("#count").text(messagesCount);

  trash.addEventListener("click", function() {
    this.parentNode.remove();
    let messagesCount = $("p").length;
    $("#count").text(messagesCount);
  });
});
