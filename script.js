let weather = {
    apiKey: "069c4c1ff33df9131e97d6e4af9cc7cf",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data)); //Changed from console.log() >> displayWeather()
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0]; //Data is originally contained in an array, so "[0]" is needed.
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = parseInt((temp* 9/5) + 32) + "°F";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://api.unsplash.com/photos/random/?query=" + name + "&client_id=znH73UCnuEIr20_sM44KszkeLkgl9Zv2w8xGu70Ulkw')";
        //document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900?" + name + "')";
       // document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1659200936483-65f3fd694065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')";
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document
    .querySelector(".search button")
    .addEventListener("click", function() {
        weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event){
        if(event.key == "Enter") {
            weather.search();
        }
});

weather.fetchWeather("Birmingham");




let clientID = "znH73UCnuEIr20_sM44KszkeLkgl9Zv2w8xGu70Ulkw";
//let endpoint = `https://api.unsplash.com/search/photos?page=1&query=office/?client_id=${clientID}`;
let endpoint = `https://api.unsplash.com/photos/random/?query=office&client_id=${clientID}`;

fetch(endpoint)
    .then(function (response){
       // console.log(response.json());
       return response.json();
    })
    .then(function (jsonData){
        console.log(jsonData);
    })