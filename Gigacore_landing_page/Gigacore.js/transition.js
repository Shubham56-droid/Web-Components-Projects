$(document).ready(function(){
    $("img.grey").hover(
    function() {
    $(this).stop().animate({"opacity": "0"}, "slow");
    },
    function() {
    $(this).stop().animate({"opacity": "1"}, "slow");
    });
    });