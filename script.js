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

$("body").on("click", ".trash", function() {
  this.parentNode.remove();
  let messagesCount = $("p").length;
  $("#count").text(messagesCount);
});
