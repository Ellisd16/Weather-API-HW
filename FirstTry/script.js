var APIKey = "f4d66778d0057bf1f888eb36ad071ed2";

var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=f4d66778d0057bf1f888eb36ad071ed2";




var citySearch = document.getElementById("citySearch");




$.ajax({
    url: queryURL,
    method: "GET"
})


    .then(function (response) {

        // Log the queryURL
        console.log(queryURL);

        console.log(response);


    }); 