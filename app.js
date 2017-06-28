

var $newquote = $('.new-quote');
/*Color array*/
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
/*random color*/
/*Quotes array */
var quotes =   [
    {
        "quot" : "Success means doing the best we can with what we have. Success is the doing/, not the getting; in the trying/, not the triumph. Success is a personal standard/, reaching for the highest that is in us/, becoming all that we can be.",
        "author": "- Zig Ziglar"
    },
     {
        "quot" : "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "– Herman Cain"
    },
     {
        "quot" : "Victory is sweetest when you’ve known defeat.",
        "author": "– Malcolm S. Forbes"
    },
     {
        "quot" : "Action is the foundational key to all success.",
        "author": "– Pablo Picasso"
    },
     {
        "quot" : "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.",
        "author": "– George Lorimer"
    },
     {
        "quot" : "If you want to make an easy job seem mighty hard, just keep putting off doing it.",
        "author": "– Olin Miller"
    },
     {
        "quot" : "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.",
        "author": "– Lucille Ball"
    },
     {
        "quot" : "Success does not consist in never making mistakes but in never making the same one a second time.",
        "author": "– George Bernard Shaw"
    },
     {
        "quot" : "I attribute my success to this: I never gave or took any excuse.",
        "author": "– Florence Nightingale"
    },
    {
        "quot" : "Don’t let what you cannot do interfere with what you can do.",
        "author": "– John R. Wooden"
    }


]
var authors = $('.author');
function getQuote(){
    $.ajax({
        cache: false,
        success : function(data){
         /*******Change new quotes after every click*/   
            var randomQuot = Math.floor(Math.random() * quotes.length);
            var newText = '<p>' + quotes[randomQuot].quot + '</p>';
                newText += '<p class="author">' + quotes[randomQuot].author + '</p>';
      
            $('.quote').html(newText);
        /*******End change new quotes after every click*/  
        /*******Change color after every click*/
            var color = Math.floor(Math.random() * colors.length);
            $("html body").animate({
                 backgroundColor:colors[color],
                 color:colors[color]
            },1000);
            $(".button").animate({
                 backgroundColor:colors[color]
        

            },1000);
        /*********** End Change color after every click*/
        }
    });

}
$(document).ready(function(){
    $newquote.on('click', getQuote);
});