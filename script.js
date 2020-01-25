let messagesCount = document.getElementsByTagName("p").length;
messageCount = document.getElementById("count").textContent;

for (let i = 0; i < document.getElementsByClassName("trash").length; i++) {
  document
    .getElementsByClassName("trash")
    [i].addEventListener("click", function() {
      this.parentNode.remove();
      messageCount = document.getElementById("count").textContent;
    });
}
