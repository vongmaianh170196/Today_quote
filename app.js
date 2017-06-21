var $newquote = $('.new-quote');



/*Color array*/
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
/*random color*/
var color = Math.floor(Math.random() * colors.length);
var quot;
$(document).ready(function(){
$newquote.on("click", function(e){
    e.preventDefault();
    var linkquote = "https://en.wikipedia.org/w/api.php";
    $.getJSON(linkquote,function(data){
        $.each(data, function(quotes){
            quot += '<p>' + quotes.quotes + '</p>';
        })
        $('.quote').html(quot);
    } )



})

    /*changing color function
$newquote.click(function(){
    $("html body").animate({
        backgroundColor:colors[color],
        color:colors[color],
 },1000);
 $(".button").animate({
     backgroundColor:colors[color],
        

 },1000);


});*/
});