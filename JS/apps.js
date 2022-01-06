
let Weather={
    apikey: "7bd67732a3016a8ead38ce9c877f566d ",


    fetchWeather: function(city){
        fetch(" https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid="+ this.apikey)
        .then((response) => response.json())
        .then((data) => this.displayWeatherData(data) )

    },

    displayWeatherData: function(data){
    //   getting city name
    console.log(data)
        const{name}=data;  
        const{icon,description}=data.weather[0];
        const{temp,humidity}=data.main;
        const{speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed)

        document.querySelector(".city").innerHTML="Weather in "+name;

        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".Description").innerHTML=description;

        document.querySelector(".temp").innerHTML=""+temp +"°C";
        document.querySelector(".Humidity").innerHTML="Humidity:"+humidity +"%";

        
        document.querySelector(".Windspeed").innerHTML="Windspeed:"+speed +"km/hr";



    },

    search: function(data){
      this.fetchWeather(document.querySelector(".search").value);  

    }
};

document.querySelector(".btn").addEventListener("click",function(){
Weather.search();

});

document.querySelector(".search").addEventListener("keyup",function(event){
   
    if(event.key=="Enter")
{
    Weather.search();
    
    }
});

