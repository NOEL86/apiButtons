var shows = ['Game of Thrones', 'Outlander', 'Gilmore Girls', 'The Big Bang Theory', 'Friends', 'Buffy the Vampire Slayer', 'Smallville'];
var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=DPVJwGqSewzajKIgDz9FLExLVWSPBrtL&q=&limit=25&offset=0&rating=G&lang=en?=";
var API = "DPVJwGqSewzajKIgDz9FLExLVWSPBrtL";
var rating = "g";
var numberRequest = 10;
var q = "q";

$(document).ready(function () {

    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=DPVJwGqSewzajKIgDz9FLExLVWSPBrtL&q=&limit=25&offset=0&rating=G&lang=en?=";

    queryUrl += '?' + $.param({
        'api-key': "DPVJwGqSewzajKIgDz9FLExLVWSPBrtL",
        'q': q,
    });

    $.ajax({
        URL: queryUrl,
        Method: "GET",
    }).then(function (response) {
        console.log(response);
    })
})


// for (var i = 0; i < shows.length; i++) {
//     var shows = $("<button>");
//     $("#buttons").append(shows);

//     $(".btn").on(click, function () {
//         var newButton = $("enteredSearch")
//         newButton = $("<button>");
//         $("gifs-appear-here").append(newButton);
//         console.log(enteredSearch);
//     })



// };






// })

// $(".gif").on("click", function () {

//     var state = $(this).attr("data-state");
//     console.log(this);

//     var still = $(this).attr("data-still");
//     var animate = $(this).attr("data-animate");
//     if (state === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//     } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//     }
// });