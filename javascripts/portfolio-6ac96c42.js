$(function(){var t="";$(".fil-cat").click(function(){t=$(this).attr("data-rel"),$("#portfolios-list").fadeTo(100,.1),$("#portfolios-list > div").not("."+t).fadeOut().removeClass("scale-anm"),setTimeout(function(){$("."+t).fadeIn().addClass("scale-anm"),$("#portfolios-list").fadeTo(300,1)},300)})});