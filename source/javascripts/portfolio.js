$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){
    selectedClass = $(this).attr("data-rel");
     $("#portfolios-list").fadeTo(100, 0.1);
    $("#portfolios-list div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolios-list").fadeTo(300, 1);
    }, 300);

  });
});
