var inputValue=document.querySelector(".inputValue")
var button=document.querySelector(".btn")
var weather=document.querySelector(".weather")


const apikey = "2520d54455f44ab9d96eee7c485159eb";

button.addEventListener("click",function(){
var inputcity=inputValue.value;


    fetch(" https://api.openweathermap.org/data/2.5/weather?q=" + inputcity + "&units=metric&appid="+ apikey)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        inputValue.value=" ";
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



    } );
    

})