

$(document).ready(function () {
    var showsArray = ['Game of Thrones', 'Outlander', 'Gilmore Girls', 'The Big Bang Theory', 'Friends', 'Smallville'];
    var api = "api_key=rK3wU1cHmuBEy5fHHQ9zvm9qbyfNd45i&q=";
    var rating = "G";
    var enteredSearch = "";
    var q = "";
    var queryUrl = "https://api.giphy.com/v1/gifs/search?&" + api + q + "&limit=12&" + offset + rating + "&lang=en";
    var offset = Math.floor((Math.random() * 10) * 10);

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
    $("#buttons").on("click", ".gifSelected", function () {
        event.preventDefault();
        q = $(this).attr("data-name");
        console.log(q);
        queryUrl = "https://api.giphy.com/v1/gifs/search?&" + api + q + "&limit=12&" + offset + rating + "&lang=en";


        getGifs();

        function getGifs() {
            $.ajax({
                url: queryUrl,
                method: "GET",
            }).then(function (response) {
                console.log(response);

                for (var i = 0; i < response.data.length; i++) {

                    var showImage = $("<img>");
                    showImage.addClass("gif");
                    showImage.attr("src", response.data[i].images.fixed_height.url, response.data[i].images.fixed_height_still.url);

                    showImage.attr("data-animate", response.data[i].images.fixed_height.url)
                    showImage.attr("data-still", response.data[i].images.fixed_height_still.url)
                    showImage.attr("data-state", "animated")

                    //need both things to change image from still to animate

                    $("#gifs-appear-here").prepend(showImage);
                    console.log(showImage);


                }

            })
        }


    });

    $("#gifs-appear-here").on("click", ".gif", function (event) {
        debugger;//shows events triggered to determine selected items

        var animate = $(this).attr("data-animate");

        var state = $(this).attr("data-state");
        console.log(this);

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

    });

    //Add new searches to array//
    $(".btn").on("click", function (event) {
        event.preventDefault();
        var enteredSearch = $("#enteredSearch").val().trim();

        if (enteredSearch === "") {
            return;
        } else if (showsArray.indexOf(enteredSearch) == -1) {
            showsArray.push(enteredSearch);
        }

        console.log(enteredSearch);
        // showsArray.push(enteredSearch);
        // showsArray.splice(0, 1, enteredSearch);
        console.log(showsArray);

        renderButtons();
        $("#enteredSearch").val("")//clears out the search box

    });

    //function associated with starting and stopping images//


});