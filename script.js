let messagesCount = document.getElementsByTagName("p").length;
document.getElementById("count").textContent = messagesCount;
//console.log(messagesCount);

for (let i = 0; i < document.getElementsByClassName("trash").length; i++) {
  document
    .getElementsByClassName("trash")
    [i].addEventListener("click", function() {
      this.parentNode.remove();
      let messagesCount = document.getElementsByTagName("p").length;
      document.getElementById("count").textContent = messagesCount;
    });
}
