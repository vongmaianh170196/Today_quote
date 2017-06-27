var $newquote = $('.new-quote');



/*Color array*/
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
/*random color*/
var quot;
function getQuote(){
    //e.preventDefault();
    $.ajax({
        success : function(r){
            var color = Math.floor(Math.random() * colors.length);

            $("html body").animate({
        backgroundColor:colors[color],
        color:colors[color]
 },1000);
 $(".button").animate({
     backgroundColor:colors[color]
        

 },1000);
        }
    });

}



$(document).ready(function(){
    
$newquote.on('click', getQuote);
/*{
    e.preventDefault();
    var linkquote = "https://en.wikipedia.org/w/api.php";
    var quotedata =  {
                    format: 'json'
                  };
    $.getJSON(linkquote,quotedata, function(data){
        $.each(data, function(quotes){
            quot += '<p>' + quotes.quotes + '</p>';
        })
        $('.quote').html(quot);
    } )




}*/

    /*changing color function
$newquote.click(function(e){
    e.preventDefault();
    $("html body").animate({
        backgroundColor:colors[color],
        color:colors[color],
 },1000);
 $(".button").animate({
     backgroundColor:colors[color],
        

 },1000);


});*/
});