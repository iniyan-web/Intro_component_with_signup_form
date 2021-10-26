$(".btn").click(function() {
  var firstName = $(".first-name");
  var lastName = $(".last-name");
  var emailAddress = $(".email-address");
  var password = $(".password");
  var errorIcon = $(".error-icon");
  var errMsg = $(".error-msg");
  var input = $("input");

  if ((firstName.val() == "") && (lastName.val() == "") && (emailAddress.val() == "") && (password.val() == "")) {
    errorIcon.css("display", "inline-block");
    errMsg.css("display", "inline-block");
    input.addClass("error-focus");
    input.attr("placeholder", "");
    emailAddress.attr("placeholder", "email@example/com");
    emailAddress.addClass("error-email");
  } else {
    for (var i = 1; i <= input.length; i++) {
      if ($("." + i).val() == "") {
        $("#ei-" + i).css("display", "inline-block");
        $("#em-" + i).css("display", "inline-block");
        $("." + i).addClass("error-focus");
        $("." + i).attr("placeholder", "");
        if (i == 3) {
          $("." + i).attr("placeholder", "email@example/com");
          $("." + i).addClass("error-email");
        }
      }
    }
  }
});
