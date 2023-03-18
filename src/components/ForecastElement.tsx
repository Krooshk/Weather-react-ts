import React, {useEffect} from "react";
export function ForecastElement(props:{
    id:number;
    list:any
}) {
    if (props.list){


    const options = {
        date: new Date((props.list[props.id].dt - 180 * 60) * 1000).getDate() + " " + new Date(props.list[props.id].dt * 1000).toLocaleString('en-US', {month: 'long'}),
        time: props.list[props.id].dt_txt.substr(-8, 5),
        temp: Math.round(props.list[props.id].main.temp),
        feels_like: Math.round(props.list[props.id].main.feels_like),
        weatherDescription: props.list[props.id].weather[0].main,
        icon: props.list[props.id].weather[0].icon,
    }
        let linkOnImage = `http://openweathermap.org/img/wn/${options.icon}@2x.png`

        return (
            <div className='day-block'>
                <div className="date">{options.date}</div>
                <div className="time">{options.time}</div>
                <div className="parameters">
                    <p>Temperature: {options.temp}</p>
                    <p>Feels like: {options.feels_like}</p>
                </div>
                <div className="mini-icon">
                    <p>{options.weatherDescription}</p><img src={linkOnImage} style={{width:60}} alt="weather"/>
                </div>
            </div>
        )
    } else {
        return (
            <div className='day-block'>
                No data
            </div>
        )
    }
}