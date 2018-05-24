var showsArray = ['Game of Thrones', 'Outlander', 'Gilmore Girls', 'The Big Bang Theory', 'Friends', 'Smallville'];
var API = "DPVJwGqSewzajKIgDz9FLExLVWSPBrtL";
var rating = "G";
var numberRequest = 10;
var enteredSearch = "";
var arrayItem = [];



$(document).ready(function () {

    for (var i = 0; i < showsArray.length; i++) {
        var search = $("<button>" + showsArray[i] + "</button>");
        search.appendTo("#buttons");

    }

    // var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=DPVJwGqSewzajKIgDz9FLExLVWSPBrtL&q=" + enteredSearch + "& limit=25 & offset=0 & rating=G & lang=en";
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=DPVJwGqSewzajKIgDz9FLExLVWSPBrtL&q=Game+Of+Thrones& limit=25 & offset=0 & rating=G & lang=en";

    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (response) {
        console.log(response);

        $(".btn").on("click", function () {
            event.preventDefault();

            var enteredSearch = $("#enteredSearch").val().trim();
            $("enteredSearch").val(" ");
            console.log(enteredSearch);

            showsArray.push(enteredSearch);
            console.log(showsArray);


            // showsArray.splice(index, 1);

            // var responseGif = response.data.images;
            // var showImage = $("<img>");
            // showImage.attr("src", responseGif);

            // $("#gifs-appear-here").append(showImage);







        });





    });




});








// if (state === "still") {
//     $(this).attr("src", $(this).attr("data-animate"));
//     $(this).attr("data-state", "animate");
//   } else {
//     $(this).attr("src", $(this).attr("data-still"));
//     $(this).attr("data-state", "still");
//   }
// });



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