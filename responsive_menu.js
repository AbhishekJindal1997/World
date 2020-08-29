var i = 0;

$("#menu_button").click(function () {
  if (i == 0) {
    $(".navigation").css({
      transform: "scale(3)",
    });

    $("#menu_button").css({
      transform: "rotate(45deg)",
    });
    i--;
  } else {
    $(".navigation").css({
      transform: "scale(0)",
    });

    $("#menu_button").css({
      transform: "rotate(0deg)",
    });
    i++;
  }
});
