import React, {useState, useEffect, Fragment} from 'react';

const WeatherFetch = () => {
    // const key = '3827f48327f0b650f044e19cae1cad5c';
    

    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');
    useEffect(()=> {
        fetch(
          
           "https://api.openweathermap.org/data/2.5/weather?q=Boston,us&appid=3827f48327f0b650f044e19cae1cad5c&units=imperial"

        )
        .then((res) => res.json())
        .then((data) => {
            
            setFeelsLike(data.main.feels_like);
            setMainTemp(data.main.temp);
            setDescription(data.weather[0].description);
            setMain(data.weather[0].main);
            setIconID(data.weather[0].icon)
        })

},[])
return(
    <Fragment>
    <div>
    <h2>Boston</h2>
        <h3>Temprature:{mainTemp}</h3>
        <h3>Feel like:{feels_like}</h3>
    </div>
    </Fragment>
) 
}


   
export default WeatherFetch