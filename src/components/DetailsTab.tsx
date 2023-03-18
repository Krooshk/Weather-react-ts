import React from "react";

export function DetailsTab(props:{
    city:string;
    result:any;
}){

    const data=props.result?(
        <>
            <div className="city-tab2">{props.city}</div>
            <div className="weather-info">
                <div className="temperature-tab2">Temperature:<span>{Math.round(props.result.main.temp) || "no data"}</span>°</div>
                <div className="feel-like-tab2">Feels like: <span>{Math.round(props.result.main.feels_like) || "no data"}</span>°</div>
                <div className="weather-tab2">Weather: <span>{props.result.weather[0].main || "no data"}</span></div>
                <div className="sunrise-tab2">Sunrise: <span>{new Date(1000*props.result.sys.sunset).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}) || "no data"}</span></div>
                <div className="sunset-tab2">Sunset: <span>{new Date(1000*props.result.sys.sunrise).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}) || "no data"}</span></div>
            </div>
        </>):
        (<div>No data</div>);


    return (
        <div>
            {data}
        </div>
    )
}