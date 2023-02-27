let words = [
    {
        "inputs": 5,
        "category": "Sports",
        "word": "Chess"
    },

    {
        "inputs": 6,
        "category": "European Country Name",
        "word": "France"
    },
]

var gameOver = false;

$(".clickable").click(function(){
    var correctGuess = false;
    let id = $(this).attr("id");
    var life = parseInt($("#life").text());
    for (var i = 0; i < randomWord.word.length; i++){
        if (randomWord.word.charAt(i).toLowerCase() == id){
            if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)){
                $(".fill_blanks").eq(i).html(id);
                correctGuess = true;

                if ($("#blnks").text() === randomWord.word.toLowerCase()){
                    $("#result").text("You Win!!");
                    correctGuess = true;
                    gameOver = true;
                }
            }
        }
    }
})