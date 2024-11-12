const  apiKey ="8bc6654a8ae93dfec6b25ff7634e7159";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function ckeckWeather(city){//ville saisie
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); //requete fetch envoyée a l'API
    
    if(response.status == 404){//check si il y a un erreur 404
        document.querySelector(".error").style.display="block";//selectionne le premier element HTML de la classe .error puis modifie le style CSS
        document.querySelector(".weather").style.display="none";
    }else{//sinon
        var data = await response.json();//convertie en JSON pour recuperer les information méteo dans data
    }




    document.querySelector(".city").innerHTML = data.name;//selectionne l'element html .city et modifie  contenu modifier par l'utilisateur
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";//math.round arrondit la temperature  
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";  
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main =="Clouds" ){//affiche une image specifique correspondant aux conditions meteo actuel
    weatherIcon.src ="images/clouds.png";
 }
else if (data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png"; 
}
else if (data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png"; 
}
else if (data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png"; 
}
else if (data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png"; 
}

    document.querySelector(".weather").style.display = "block";//Cette ligne sélectionne l'élément avec la classe .weather et modifie son style display pour qu'il soit "block".
    document.querySelector(".error").style.display = "none";//Cette ligne sélectionne l'élément avec la classe .error et change son style display en "none".

}


searchBtn.addEventListener("click", ()=>{//ce code fait en sorte que, lorsqu'on clique sur le bouton de recherche, la fonction ckeckWeather est appelée avec la ville que l'utilisateur a saisie.
    ckeckWeather(searchBox.value);
    
});