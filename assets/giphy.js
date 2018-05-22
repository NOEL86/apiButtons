var shows = ['Game of Thrones', 'Outlander', 'Gilmore Girls', 'The Big Bang Theory', 'Friends', 'Buffy the Vampire Slayer', 'Smallville'];
var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=DPVJwGqSewzajKIgDz9FLExLVWSPBrtL&q=&limit=25&offset=0&rating=G&lang=en?=tvshow";
var API = "DPVJwGqSewzajKIgDz9FLExLVWSPBrtL";
var rating = "g";
var numberRequest = 10;
var q = "q";

$(document).ready(function () {

    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=DPVJwGqSewzajKIgDz9FLExLVWSPBrtL&q=&limit=25&offset=0&rating=G&lang=en?=tvshow";

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




    for (var i = 0; i < shows.length; i++) {
        var button = $("<button>");
        $("buttons").append(button);

    };

    // $(".btn").on(click, function () {
    //     $("enteredSearch").append(button);
    //     console.log(this);
    // })




















})