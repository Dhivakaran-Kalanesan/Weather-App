



let API_KEY = "fec420b4d01228390314b72316bca1d0";


let city = 'chennai';

getWeatherData = (city) => {

    const URL = 'https://api.openweathermap.org/data/2.5/';
         
    const Full_Url = `${URL}forecast?q=${city}&appid=${API_KEY}`;

    const weatherPromise = fetch(Full_Url);

    return weatherPromise.then((response) => {
        return response.json()
    })

}


function searchCity() {

    const city = document.getElementById('inputCity').value;

    getWeatherData(city)
        .then((response) => {
            showWeatherData(response);
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
}

showWeatherData = (weatherData) => {
   

    document.getElementById('city_name').innerText = weatherData.city.name;


    document.getElementById('weatherIcon').src = 'http://openweathermap.org/img/w/'+weatherData.list[0].weather[0].icon+'.png';

    document.getElementById('weather').innerText = weatherData.list[0].weather[0].description;

    document.getElementById('humidity').innerText = weatherData.list[0].main.humidity +' %' ;

    document.getElementById('temp').innerText = weatherData.list[0].main.temp+' °F';

    document.getElementById('wind').innerText = weatherData.list[0].wind.speed+' km/h';

    document.getElementById('fLike').innerText = weatherData.list[0].main.feels_like + ' °F';

    document.getElementById('date').innerText = (weatherData.list[0].dt_txt).slice(0,10);

    document.getElementById('time').innerText = (weatherData.list[0].dt_txt).slice(11);






    document.getElementById('weatherIcon1').src = 'http://openweathermap.org/img/w/'+weatherData.list[1].weather[0].icon+'.png';

    document.getElementById('weather1').innerText = weatherData.list[1].weather[0].description;

    document.getElementById('humidity1').innerText = weatherData.list[1].main.humidity +' %' ;

    document.getElementById('temp1').innerText = weatherData.list[1].main.temp+' °F';

    document.getElementById('wind1').innerText = weatherData.list[1].wind.speed+' km/h';

    document.getElementById('fLike1').innerText = weatherData.list[1].main.feels_like + ' °F';

    document.getElementById('date1').innerText = (weatherData.list[1].dt_txt).slice(0,10);

    document.getElementById('time1').innerText = (weatherData.list[1].dt_txt).slice(11);





    document.getElementById('weatherIcon2').src = 'http://openweathermap.org/img/w/'+weatherData.list[2].weather[0].icon+'.png';

    document.getElementById('weather2').innerText = weatherData.list[2].weather[0].description;

    document.getElementById('humidity2').innerText = weatherData.list[2].main.humidity +' %' ;

    document.getElementById('temp2').innerText = weatherData.list[2].main.temp+' °F';

    document.getElementById('wind2').innerText = weatherData.list[2].wind.speed+' km/h';

    document.getElementById('fLike2').innerText = weatherData.list[2].main.feels_like + ' °F';

    document.getElementById('date2').innerText = (weatherData.list[2].dt_txt).slice(0,10);

    document.getElementById('time2').innerText = (weatherData.list[2].dt_txt).slice(11);




    document.getElementById('weatherIcon3').src = 'http://openweathermap.org/img/w/'+weatherData.list[3].weather[0].icon+'.png';

    document.getElementById('weather3').innerText = weatherData.list[3].weather[0].description;

    document.getElementById('humidity3').innerText = weatherData.list[3].main.humidity +' %' ;

    document.getElementById('temp3').innerText = weatherData.list[3].main.temp+' °F';

    document.getElementById('wind3').innerText = weatherData.list[3].wind.speed+' km/h';

    document.getElementById('fLike3').innerText = weatherData.list[3].main.feels_like + ' °F';

    document.getElementById('date3').innerText = (weatherData.list[3].dt_txt).slice(0,10);

    document.getElementById('time3').innerText = (weatherData.list[3].dt_txt).slice(11);





    document.getElementById('weatherIcon4').src = 'http://openweathermap.org/img/w/'+weatherData.list[4].weather[0].icon+'.png';

    document.getElementById('weather4').innerText = weatherData.list[4].weather[0].description;

    document.getElementById('humidity4').innerText = weatherData.list[4].main.humidity +' %' ;

    document.getElementById('temp4').innerText = weatherData.list[4].main.temp+' °F';

    document.getElementById('wind4').innerText = weatherData.list[4].wind.speed+' km/h';

    document.getElementById('fLike4').innerText = weatherData.list[4].main.feels_like + ' °F';

    document.getElementById('date4').innerText = (weatherData.list[4].dt_txt).slice(0,10);

    document.getElementById('time4').innerText = (weatherData.list[4].dt_txt).slice(11);




    document.getElementById('date5').innerText = (weatherData.list[5].dt_txt).slice(0,10);

    document.getElementById('time5').innerText = (weatherData.list[5].dt_txt).slice(11);

    document.getElementById('weatherIcon5').src = 'http://openweathermap.org/img/w/'+weatherData.list[5].weather[0].icon+'.png';

    document.getElementById('weather5').innerText = weatherData.list[5].weather[0].description;

    document.getElementById('humidity5').innerText = weatherData.list[5].main.humidity +' %' ;

    document.getElementById('temp5').innerText = weatherData.list[5].main.temp+' °F';

    document.getElementById('wind5').innerText = weatherData.list[5].wind.speed+' km/h';

    document.getElementById('fLike5').innerText = weatherData.list[5].main.feels_like+ ' °F';



    document.getElementById('weatherIcon6').src = 'http://openweathermap.org/img/w/'+weatherData.list[6].weather[0].icon+'.png';

    document.getElementById('weather6').innerText = weatherData.list[6].weather[0].description;

    document.getElementById('humidity6').innerText = weatherData.list[6].main.humidity +' %' ;

    document.getElementById('temp6').innerText = weatherData.list[6].main.temp+' °F';

    document.getElementById('wind6').innerText = weatherData.list[6].wind.speed+' km/h';

    document.getElementById('fLike6').innerText = weatherData.list[6].main.feels_like + ' °F';

    document.getElementById('date6').innerText = (weatherData.list[6].dt_txt).slice(0,10);

    document.getElementById('time6').innerText = (weatherData.list[6].dt_txt).slice(11);




    document.getElementById('weatherIcon7').src = 'http://openweathermap.org/img/w/'+weatherData.list[7].weather[0].icon+'.png';

    document.getElementById('weather7').innerText = weatherData.list[7].weather[0].description;

    document.getElementById('humidity7').innerText = weatherData.list[7].main.humidity +' %' ;

    document.getElementById('temp7').innerText = weatherData.list[7].main.temp+' °F';

    document.getElementById('wind7').innerText = weatherData.list[7].wind.speed+' km/h';

    document.getElementById('fLike7').innerText = weatherData.list[7].main.feels_like + ' °F';

    document.getElementById('date7').innerText = (weatherData.list[7].dt_txt).slice(0,10);

    document.getElementById('time7').innerText = (weatherData.list[7].dt_txt).slice(11);




    document.getElementById('weatherIcon8').src = 'http://openweathermap.org/img/w/'+weatherData.list[8].weather[0].icon+'.png';

    document.getElementById('weather8').innerText = weatherData.list[8].weather[0].description;

    document.getElementById('humidity8').innerText = weatherData.list[8].main.humidity +' %' ;

    document.getElementById('temp8').innerText = weatherData.list[8].main.temp+' °F';

    document.getElementById('wind8').innerText = weatherData.list[8].wind.speed+' km/h';

    document.getElementById('fLike8').innerText = weatherData.list[8].main.feels_like + ' °F';

    document.getElementById('date8').innerText = (weatherData.list[8].dt_txt).slice(0,10);

    document.getElementById('time8').innerText = (weatherData.list[8].dt_txt).slice(11);




    document.getElementById('weatherIcon9').src = 'http://openweathermap.org/img/w/'+weatherData.list[9].weather[0].icon+'.png';

    document.getElementById('weather9').innerText = weatherData.list[9].weather[0].description;

    document.getElementById('humidity9').innerText = weatherData.list[9].main.humidity +' %' ;

    document.getElementById('temp9').innerText = weatherData.list[9].main.temp+' °F';

    document.getElementById('wind9').innerText = weatherData.list[9].wind.speed+' km/h';

    document.getElementById('fLike9').innerText = weatherData.list[9].main.feels_like + ' °F';

    document.getElementById('date9').innerText = (weatherData.list[9].dt_txt).slice(0,10);

    document.getElementById('time9').innerText = (weatherData.list[9].dt_txt).slice(11);



    
    document.getElementById('weatherIcon10').src = 'http://openweathermap.org/img/w/'+weatherData.list[10].weather[0].icon+'.png';

    document.getElementById('weather10').innerText = weatherData.list[10].weather[0].description;

    document.getElementById('humidity10').innerText = weatherData.list[10].main.humidity +' %' ;

    document.getElementById('temp10').innerText = weatherData.list[10].main.temp+' °F';

    document.getElementById('wind10').innerText = weatherData.list[10].wind.speed+' km/h';

    document.getElementById('fLike10').innerText = weatherData.list[10].main.feels_like + ' °F';

    document.getElementById('date10').innerText = (weatherData.list[10].dt_txt).slice(0,10);

    document.getElementById('time10').innerText = (weatherData.list[10].dt_txt).slice(11);




    document.getElementById('weatherIcon11').src = 'http://openweathermap.org/img/w/'+weatherData.list[11].weather[0].icon+'.png';

    document.getElementById('weather11').innerText = weatherData.list[11].weather[0].description;

    document.getElementById('humidity11').innerText = weatherData.list[11].main.humidity +' %' ;

    document.getElementById('temp11').innerText = weatherData.list[11].main.temp+' °F';

    document.getElementById('wind11').innerText = weatherData.list[11].wind.speed+' km/h';

    document.getElementById('fLike11').innerText = weatherData.list[11].main.feels_like + ' °F';

    document.getElementById('date11').innerText = (weatherData.list[11].dt_txt).slice(0,10);

    document.getElementById('time11').innerText = (weatherData.list[11].dt_txt).slice(11);





    document.getElementById('weatherIcon12').src = 'http://openweathermap.org/img/w/'+weatherData.list[12].weather[0].icon+'.png';

    document.getElementById('weather12').innerText = weatherData.list[12].weather[0].description;

    document.getElementById('humidity12').innerText = weatherData.list[12].main.humidity +' %' ;

    document.getElementById('temp12').innerText = weatherData.list[12].main.temp+' °F';

    document.getElementById('wind12').innerText = weatherData.list[12].wind.speed+' km/h';

    document.getElementById('fLike12').innerText = weatherData.list[12].main.feels_like + ' °F';

    document.getElementById('date12').innerText = (weatherData.list[12].dt_txt).slice(0,10);

    document.getElementById('time12').innerText = (weatherData.list[12].dt_txt).slice(11);




    document.getElementById('weatherIcon13').src = 'http://openweathermap.org/img/w/'+weatherData.list[13].weather[0].icon+'.png';

    document.getElementById('weather13').innerText = weatherData.list[13].weather[0].description;

    document.getElementById('humidity13').innerText = weatherData.list[13].main.humidity +' %' ;

    document.getElementById('temp13').innerText = weatherData.list[13].main.temp+' °F';

    document.getElementById('wind13').innerText = weatherData.list[13].wind.speed+' km/h';

    document.getElementById('fLike13').innerText = weatherData.list[13].main.feels_like + ' °F';

    document.getElementById('date13').innerText = (weatherData.list[13].dt_txt).slice(0,10);

    document.getElementById('time13').innerText = (weatherData.list[13].dt_txt).slice(11);





    document.getElementById('weatherIcon14').src = 'http://openweathermap.org/img/w/'+weatherData.list[14].weather[0].icon+'.png';

    document.getElementById('weather14').innerText = weatherData.list[14].weather[0].description;

    document.getElementById('humidity14').innerText = weatherData.list[14].main.humidity +' %' ;

    document.getElementById('temp14').innerText = weatherData.list[14].main.temp+' °F';

    document.getElementById('wind14').innerText = weatherData.list[14].wind.speed+' km/h';

    document.getElementById('fLike14').innerText = weatherData.list[14].main.feels_like + ' °F';

    document.getElementById('date14').innerText = (weatherData.list[14].dt_txt).slice(0,10);

    document.getElementById('time14').innerText = (weatherData.list[14].dt_txt).slice(11);




    document.getElementById('date15').innerText = (weatherData.list[15].dt_txt).slice(0,10);

    document.getElementById('time15').innerText = (weatherData.list[15].dt_txt).slice(11);

    document.getElementById('weatherIcon15').src = 'http://openweathermap.org/img/w/'+weatherData.list[15].weather[0].icon+'.png';

    document.getElementById('weather15').innerText = weatherData.list[15].weather[0].description;

    document.getElementById('humidity15').innerText = weatherData.list[15].main.humidity +' %' ;

    document.getElementById('temp15').innerText = weatherData.list[15].main.temp+' °F';

    document.getElementById('wind15').innerText = weatherData.list[15].wind.speed+' km/h';

    document.getElementById('fLike15').innerText = weatherData.list[15].main.feels_like+ ' °F';



    document.getElementById('weatherIcon16').src = 'http://openweathermap.org/img/w/'+weatherData.list[16].weather[0].icon+'.png';

    document.getElementById('weather16').innerText = weatherData.list[16].weather[0].description;

    document.getElementById('humidity16').innerText = weatherData.list[16].main.humidity +' %' ;

    document.getElementById('temp16').innerText = weatherData.list[16].main.temp+' °F';

    document.getElementById('wind16').innerText = weatherData.list[16].wind.speed+' km/h';

    document.getElementById('fLike16').innerText = weatherData.list[16].main.feels_like + ' °F';

    document.getElementById('date16').innerText = (weatherData.list[16].dt_txt).slice(0,10);

    document.getElementById('time16').innerText = (weatherData.list[16].dt_txt).slice(11);




    document.getElementById('weatherIcon17').src = 'http://openweathermap.org/img/w/'+weatherData.list[17].weather[0].icon+'.png';

    document.getElementById('weather17').innerText = weatherData.list[17].weather[0].description;

    document.getElementById('humidity17').innerText = weatherData.list[17].main.humidity +' %' ;

    document.getElementById('temp17').innerText = weatherData.list[17].main.temp+' °F';

    document.getElementById('wind17').innerText = weatherData.list[17].wind.speed+' km/h';

    document.getElementById('fLike17').innerText = weatherData.list[17].main.feels_like + ' °F';

    document.getElementById('date17').innerText = (weatherData.list[17].dt_txt).slice(0,10);

    document.getElementById('time17').innerText = (weatherData.list[17].dt_txt).slice(11);




    document.getElementById('weatherIcon18').src = 'http://openweathermap.org/img/w/'+weatherData.list[18].weather[0].icon+'.png';

    document.getElementById('weather18').innerText = weatherData.list[18].weather[0].description;

    document.getElementById('humidity18').innerText = weatherData.list[18].main.humidity +' %' ;

    document.getElementById('temp18').innerText = weatherData.list[18].main.temp+' °F';

    document.getElementById('wind18').innerText = weatherData.list[18].wind.speed+' km/h';

    document.getElementById('fLike18').innerText = weatherData.list[18].main.feels_like + ' °F';

    document.getElementById('date18').innerText = (weatherData.list[18].dt_txt).slice(0,10);

    document.getElementById('time18').innerText = (weatherData.list[18].dt_txt).slice(11);




    document.getElementById('weatherIcon19').src = 'http://openweathermap.org/img/w/'+weatherData.list[19].weather[0].icon+'.png';

    document.getElementById('weather19').innerText = weatherData.list[19].weather[0].description;

    document.getElementById('humidity19').innerText = weatherData.list[19].main.humidity +' %' ;

    document.getElementById('temp19').innerText = weatherData.list[19].main.temp+' °F';

    document.getElementById('wind19').innerText = weatherData.list[19].wind.speed+' km/h';

    document.getElementById('fLike19').innerText = weatherData.list[19].main.feels_like + ' °F';

    document.getElementById('date19').innerText = (weatherData.list[19].dt_txt).slice(0,10);

    document.getElementById('time19').innerText = (weatherData.list[19].dt_txt).slice(11);



    
    document.getElementById('weatherIcon20').src = 'http://openweathermap.org/img/w/'+weatherData.list[20].weather[0].icon+'.png';

    document.getElementById('weather20').innerText = weatherData.list[20].weather[0].description;

    document.getElementById('humidity20').innerText = weatherData.list[20].main.humidity +' %' ;

    document.getElementById('temp20').innerText = weatherData.list[20].main.temp+' °F';

    document.getElementById('wind20').innerText = weatherData.list[20].wind.speed+' km/h';

    document.getElementById('fLike20').innerText = weatherData.list[20].main.feels_like + ' °F';

    document.getElementById('date20').innerText = (weatherData.list[20].dt_txt).slice(0,10);

    document.getElementById('time20').innerText = (weatherData.list[20].dt_txt).slice(11);





    document.getElementById('weatherIcon21').src = 'http://openweathermap.org/img/w/'+weatherData.list[21].weather[0].icon+'.png';

    document.getElementById('weather21').innerText = weatherData.list[21].weather[0].description;

    document.getElementById('humidity21').innerText = weatherData.list[21].main.humidity +' %' ;

    document.getElementById('temp21').innerText = weatherData.list[21].main.temp+' °F';

    document.getElementById('wind21').innerText = weatherData.list[21].wind.speed+' km/h';

    document.getElementById('fLike21').innerText = weatherData.list[21].main.feels_like + ' °F';

    document.getElementById('date21').innerText = (weatherData.list[21].dt_txt).slice(0,10);

    document.getElementById('time21').innerText = (weatherData.list[21].dt_txt).slice(11);





    document.getElementById('weatherIcon22').src = 'http://openweathermap.org/img/w/'+weatherData.list[22].weather[0].icon+'.png';

    document.getElementById('weather22').innerText = weatherData.list[22].weather[0].description;

    document.getElementById('humidity22').innerText = weatherData.list[22].main.humidity +' %' ;

    document.getElementById('temp22').innerText = weatherData.list[22].main.temp+' °F';

    document.getElementById('wind22').innerText = weatherData.list[22].wind.speed+' km/h';

    document.getElementById('fLike22').innerText = weatherData.list[22].main.feels_like + ' °F';

    document.getElementById('date22').innerText = (weatherData.list[22].dt_txt).slice(0,10);

    document.getElementById('time22').innerText = (weatherData.list[22].dt_txt).slice(11);




    document.getElementById('weatherIcon23').src = 'http://openweathermap.org/img/w/'+weatherData.list[23].weather[0].icon+'.png';

    document.getElementById('weather23').innerText = weatherData.list[23].weather[0].description;

    document.getElementById('humidity23').innerText = weatherData.list[23].main.humidity +' %' ;

    document.getElementById('temp23').innerText = weatherData.list[23].main.temp+' °F';

    document.getElementById('wind23').innerText = weatherData.list[23].wind.speed+' km/h';

    document.getElementById('fLike23').innerText = weatherData.list[23].main.feels_like + ' °F';

    document.getElementById('date23').innerText = (weatherData.list[23].dt_txt).slice(0,10);

    document.getElementById('time23').innerText = (weatherData.list[23].dt_txt).slice(11);





    document.getElementById('weatherIcon24').src = 'http://openweathermap.org/img/w/'+weatherData.list[24].weather[0].icon+'.png';

    document.getElementById('weather24').innerText = weatherData.list[24].weather[0].description;

    document.getElementById('humidity24').innerText = weatherData.list[24].main.humidity +' %' ;

    document.getElementById('temp24').innerText = weatherData.list[24].main.temp+' °F';

    document.getElementById('wind24').innerText = weatherData.list[24].wind.speed+' km/h';

    document.getElementById('fLike24').innerText = weatherData.list[24].main.feels_like + ' °F';

    document.getElementById('date24').innerText = (weatherData.list[24].dt_txt).slice(0,10);

    document.getElementById('time24').innerText = (weatherData.list[24].dt_txt).slice(11);




    document.getElementById('date25').innerText = (weatherData.list[25].dt_txt).slice(0,10);

    document.getElementById('time25').innerText = (weatherData.list[25].dt_txt).slice(11);

    document.getElementById('weatherIcon25').src = 'http://openweathermap.org/img/w/'+weatherData.list[25].weather[0].icon+'.png';

    document.getElementById('weather25').innerText = weatherData.list[25].weather[0].description;

    document.getElementById('humidity25').innerText = weatherData.list[25].main.humidity +' %' ;

    document.getElementById('temp25').innerText = weatherData.list[25].main.temp+' °F';

    document.getElementById('wind25').innerText = weatherData.list[25].wind.speed+' km/h';

    document.getElementById('fLike25').innerText = weatherData.list[25].main.feels_like+ ' °F';



    document.getElementById('weatherIcon26').src = 'http://openweathermap.org/img/w/'+weatherData.list[26].weather[0].icon+'.png';

    document.getElementById('weather26').innerText = weatherData.list[26].weather[0].description;

    document.getElementById('humidity26').innerText = weatherData.list[26].main.humidity +' %' ;

    document.getElementById('temp26').innerText = weatherData.list[26].main.temp+' °F';

    document.getElementById('wind26').innerText = weatherData.list[26].wind.speed+' km/h';

    document.getElementById('fLike26').innerText = weatherData.list[26].main.feels_like + ' °F';

    document.getElementById('date26').innerText = (weatherData.list[26].dt_txt).slice(0,10);

    document.getElementById('time26').innerText = (weatherData.list[26].dt_txt).slice(11);




    document.getElementById('weatherIcon27').src = 'http://openweathermap.org/img/w/'+weatherData.list[27].weather[0].icon+'.png';

    document.getElementById('weather27').innerText = weatherData.list[27].weather[0].description;

    document.getElementById('humidity27').innerText = weatherData.list[27].main.humidity +' %' ;

    document.getElementById('temp27').innerText = weatherData.list[27].main.temp+' °F';

    document.getElementById('wind27').innerText = weatherData.list[27].wind.speed+' km/h';

    document.getElementById('fLike27').innerText = weatherData.list[27].main.feels_like + ' °F';

    document.getElementById('date27').innerText = (weatherData.list[27].dt_txt).slice(0,10);

    document.getElementById('time27').innerText = (weatherData.list[27].dt_txt).slice(11);




    document.getElementById('weatherIcon28').src = 'http://openweathermap.org/img/w/'+weatherData.list[28].weather[0].icon+'.png';

    document.getElementById('weather28').innerText = weatherData.list[28].weather[0].description;

    document.getElementById('humidity28').innerText = weatherData.list[28].main.humidity +' %' ;

    document.getElementById('temp28').innerText = weatherData.list[28].main.temp+' °F';

    document.getElementById('wind28').innerText = weatherData.list[28].wind.speed+' km/h';

    document.getElementById('fLike28').innerText = weatherData.list[28].main.feels_like + ' °F';

    document.getElementById('date28').innerText = (weatherData.list[28].dt_txt).slice(0,10);

    document.getElementById('time28').innerText = (weatherData.list[28].dt_txt).slice(11);




    document.getElementById('weatherIcon29').src = 'http://openweathermap.org/img/w/'+weatherData.list[29].weather[0].icon+'.png';

    document.getElementById('weather29').innerText = weatherData.list[29].weather[0].description;

    document.getElementById('humidity29').innerText = weatherData.list[29].main.humidity +' %' ;

    document.getElementById('temp29').innerText = weatherData.list[29].main.temp+' °F';

    document.getElementById('wind29').innerText = weatherData.list[29].wind.speed+' km/h';

    document.getElementById('fLike29').innerText = weatherData.list[29].main.feels_like + ' °F';

    document.getElementById('date29').innerText = (weatherData.list[29].dt_txt).slice(0,10);

    document.getElementById('time29').innerText = (weatherData.list[29].dt_txt).slice(11);



    
    document.getElementById('weatherIcon30').src = 'http://openweathermap.org/img/w/'+weatherData.list[30].weather[0].icon+'.png';

    document.getElementById('weather30').innerText = weatherData.list[30].weather[0].description;

    document.getElementById('humidity30').innerText = weatherData.list[30].main.humidity +' %' ;

    document.getElementById('temp30').innerText = weatherData.list[30].main.temp+' °F';

    document.getElementById('wind30').innerText = weatherData.list[30].wind.speed+' km/h';

    document.getElementById('fLike30').innerText = weatherData.list[30].main.feels_like + ' °F';

    document.getElementById('date30').innerText = (weatherData.list[30].dt_txt).slice(0,10);

    document.getElementById('time30').innerText = (weatherData.list[30].dt_txt).slice(11);




    document.getElementById('weatherIcon31').src = 'http://openweathermap.org/img/w/'+weatherData.list[31].weather[0].icon+'.png';

    document.getElementById('weather31').innerText = weatherData.list[31].weather[0].description;

    document.getElementById('humidity31').innerText = weatherData.list[31].main.humidity +' %' ;

    document.getElementById('temp31').innerText = weatherData.list[31].main.temp+' °F';

    document.getElementById('wind31').innerText = weatherData.list[31].wind.speed+' km/h';

    document.getElementById('fLike31').innerText = weatherData.list[31].main.feels_like + ' °F';

    document.getElementById('date31').innerText = (weatherData.list[31].dt_txt).slice(0,10);

    document.getElementById('time31').innerText = (weatherData.list[31].dt_txt).slice(11);





    document.getElementById('weatherIcon32').src = 'http://openweathermap.org/img/w/'+weatherData.list[32].weather[0].icon+'.png';

    document.getElementById('weather32').innerText = weatherData.list[32].weather[0].description;

    document.getElementById('humidity32').innerText = weatherData.list[32].main.humidity +' %' ;

    document.getElementById('temp32').innerText = weatherData.list[32].main.temp+' °F';

    document.getElementById('wind32').innerText = weatherData.list[32].wind.speed+' km/h';

    document.getElementById('fLike32').innerText = weatherData.list[32].main.feels_like + ' °F';

    document.getElementById('date32').innerText = (weatherData.list[32].dt_txt).slice(0,10);

    document.getElementById('time32').innerText = (weatherData.list[32].dt_txt).slice(11);




    document.getElementById('weatherIcon33').src = 'http://openweathermap.org/img/w/'+weatherData.list[33].weather[0].icon+'.png';

    document.getElementById('weather33').innerText = weatherData.list[33].weather[0].description;

    document.getElementById('humidity33').innerText = weatherData.list[33].main.humidity +' %' ;

    document.getElementById('temp33').innerText = weatherData.list[33].main.temp+' °F';

    document.getElementById('wind33').innerText = weatherData.list[33].wind.speed+' km/h';

    document.getElementById('fLike33').innerText = weatherData.list[33].main.feels_like + ' °F';

    document.getElementById('date33').innerText = (weatherData.list[33].dt_txt).slice(0,10);

    document.getElementById('time33').innerText = (weatherData.list[33].dt_txt).slice(11);





    document.getElementById('weatherIcon34').src = 'http://openweathermap.org/img/w/'+weatherData.list[34].weather[0].icon+'.png';

    document.getElementById('weather34').innerText = weatherData.list[34].weather[0].description;

    document.getElementById('humidity34').innerText = weatherData.list[34].main.humidity +' %' ;

    document.getElementById('temp34').innerText = weatherData.list[34].main.temp+' °F';

    document.getElementById('wind34').innerText = weatherData.list[34].wind.speed+' km/h';

    document.getElementById('fLike34').innerText = weatherData.list[34].main.feels_like + ' °F';

    document.getElementById('date34').innerText = (weatherData.list[34].dt_txt).slice(0,10);

    document.getElementById('time34').innerText = (weatherData.list[34].dt_txt).slice(11);




    document.getElementById('date35').innerText = (weatherData.list[35].dt_txt).slice(0,10);

    document.getElementById('time35').innerText = (weatherData.list[35].dt_txt).slice(11);

    document.getElementById('weatherIcon35').src = 'http://openweathermap.org/img/w/'+weatherData.list[35].weather[0].icon+'.png';

    document.getElementById('weather35').innerText = weatherData.list[35].weather[0].description;

    document.getElementById('humidity35').innerText = weatherData.list[35].main.humidity +' %' ;

    document.getElementById('temp35').innerText = weatherData.list[35].main.temp+' °F';

    document.getElementById('wind35').innerText = weatherData.list[35].wind.speed+' km/h';

    document.getElementById('fLike35').innerText = weatherData.list[35].main.feels_like+ ' °F';



    document.getElementById('weatherIcon36').src = 'http://openweathermap.org/img/w/'+weatherData.list[36].weather[0].icon+'.png';

    document.getElementById('weather36').innerText = weatherData.list[36].weather[0].description;

    document.getElementById('humidity36').innerText = weatherData.list[36].main.humidity +' %' ;

    document.getElementById('temp36').innerText = weatherData.list[36].main.temp+' °F';

    document.getElementById('wind36').innerText = weatherData.list[36].wind.speed+' km/h';

    document.getElementById('fLike36').innerText = weatherData.list[36].main.feels_like + ' °F';

    document.getElementById('date36').innerText = (weatherData.list[36].dt_txt).slice(0,10);

    document.getElementById('time36').innerText = (weatherData.list[36].dt_txt).slice(11);




    document.getElementById('weatherIcon37').src = 'http://openweathermap.org/img/w/'+weatherData.list[37].weather[0].icon+'.png';

    document.getElementById('weather37').innerText = weatherData.list[37].weather[0].description;

    document.getElementById('humidity37').innerText = weatherData.list[37].main.humidity +' %' ;

    document.getElementById('temp37').innerText = weatherData.list[37].main.temp+' °F';

    document.getElementById('wind37').innerText = weatherData.list[37].wind.speed+' km/h';

    document.getElementById('fLike37').innerText = weatherData.list[37].main.feels_like + ' °F';

    document.getElementById('date37').innerText = (weatherData.list[37].dt_txt).slice(0,10);

    document.getElementById('time37').innerText = (weatherData.list[37].dt_txt).slice(11);




    document.getElementById('weatherIcon38').src = 'http://openweathermap.org/img/w/'+weatherData.list[38].weather[0].icon+'.png';

    document.getElementById('weather38').innerText = weatherData.list[38].weather[0].description;

    document.getElementById('humidity38').innerText = weatherData.list[38].main.humidity +' %' ;

    document.getElementById('temp38').innerText = weatherData.list[38].main.temp+' °F';

    document.getElementById('wind38').innerText = weatherData.list[38].wind.speed+' km/h';

    document.getElementById('fLike38').innerText = weatherData.list[38].main.feels_like + ' °F';

    document.getElementById('date38').innerText = (weatherData.list[38].dt_txt).slice(0,10);

    document.getElementById('time38').innerText = (weatherData.list[38].dt_txt).slice(11);




    document.getElementById('weatherIcon39').src = 'http://openweathermap.org/img/w/'+weatherData.list[39].weather[0].icon+'.png';

    document.getElementById('weather39').innerText = weatherData.list[39].weather[0].description;

    document.getElementById('humidity39').innerText = weatherData.list[39].main.humidity +' %' ;

    document.getElementById('temp39').innerText = weatherData.list[39].main.temp+' °F';

    document.getElementById('wind39').innerText = weatherData.list[39].wind.speed+' km/h';

    document.getElementById('fLike39').innerText = weatherData.list[39].main.feels_like + ' °F';

    document.getElementById('date39').innerText = (weatherData.list[39].dt_txt).slice(0,10);

    document.getElementById('time39').innerText = (weatherData.list[39].dt_txt).slice(11);




}
       


