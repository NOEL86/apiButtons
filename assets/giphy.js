
$(document).ready(function () {
    var showsArray = ['Game of Thrones', 'Outlander', 'Gilmore Girls', 'The Big Bang Theory', 'Friends', 'Smallville'];
    var api = "api_key=rK3wU1cHmuBEy5fHHQ9zvm9qbyfNd45i&q=";
    var rating = "G";
    var enteredSearch = "";
    var q = "";
    var queryUrl = "https://api.giphy.com/v1/gifs/search?&" + api + q + "&limit=15&offset=0&" + rating + "&lang=en";


    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (response) {
        console.log(response);
    });


    //create new buttons for shows to search//
    function renderButtons() {
        $("#buttons").empty();

        for (var i = 0; i < showsArray.length; i++) {
            var newButton = $("<button>" + showsArray[i] + "</button>");
            newButton.appendTo("#buttons");
            newButton.addClass("gifSelected")
            newButton.attr("data-name", showsArray[i]);
            newButton.text(showsArray[i]);
            $("#buttons").append(newButton);

            //make the value of the button a variable 
        }
    }

    renderButtons();

    //search for the entered button gifs and have the gifs appear//
    $(".gifSelected").on("click", function () {
        event.preventDefault();
        q = $(this).attr("data-name");
        console.log(q);
        var queryUrl = "https://api.giphy.com/v1/gifs/search?&" + api + q + "&limit=10&offset=0&" + rating + "&lang=en";

        getGifs();

        function getGifs() {
            $.ajax({
                url: queryUrl,
                method: "GET",
            }).then(function (response) {
                console.log(response);

                for (var i = 0; i < response.data.length; i++) {

                    var showImage = $("<img>");
                    showImage.attr("src", response.data[i].images.original.url);
                    $("#gifs-appear-here").prepend(showImage);
                    console.log(showImage);


                }

            })
        }


    });

    //Add new searches to array//
    $(".btn").on("click", function () {
        event.preventDefault();
        var enteredSearch = $("#enteredSearch").val().trim();
        if (enteredSearch === "") {
            return;
        } else {

            console.log(enteredSearch);

            showsArray.push(enteredSearch);
            // showsArray.splice(0, 1, enteredSearch);
            console.log(showsArray);
            renderButtons();
            $("#enteredSearch").val("")

        }

    });

});
    // showsArray.splice(index, 1); //heard I may need this?? Don't know why??






//possible good code for starting and stopping images//
// if (state === "still") {
//     $(this).attr("src", $(this).attr("data-animate"));
//     $(this).attr("data-state", "animate");
//   } else {
//     $(this).attr("src", $(this).attr("data-still"));
//     $(this).attr("data-state", "still");
//   }
// });


//function associated with starting and stopping images//
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