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

$("#btn-add").click(function() {
  let message = $("#add-message").val();
  $("body").append(
    `
          <div class="row">
            <img class="avatar" src="images/avatar-2.jpg">
            <div>
              <h6>Saïda ZGHAL</h6>
              <p>` +
      message +
      `</p>
            </div>
            <img class="trash" src="images/trash.png">
          </div>
  `
  );
  $("#count").text($("p").length);
  $("#add-message").val("");
});

$("#btn-search").click(function() {
  $("h6").each(function() {
    if ($("#search-message").val() != $(this).text()) {
      $(this)
        .parent()
        .parent()
        .fadeOut();
    } else {
      $(this)
        .parent()
        .parent()
        .show();
    }
  });
  $("#search-message").val("");
});
