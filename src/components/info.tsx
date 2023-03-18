import React, {useEffect} from "react";
import {NowTab} from "./NowTab";
import {DetailsTab} from "./DetailsTab";
import {ForecastTab} from "./ForecastTab";


export function Info(props:{
    tabs:"Now"|"Details"|"Forecast";
    handleTab:(value:"Now"|"Details"|"Forecast")=> void;
    city:string;
    promiseInfo:Promise<any>;
    promiseInfoForecast:Promise<any>;
    handleClick:()=>void;
    isLike: Boolean;
}){

    function handleClick(){
        props.handleClick();
        console.log(2);
    }


    function handleTab(event:any){
        props.handleTab(event.target.innerHTML);
    }


    return (
        <div className='infoBlock'>
            <div className='display'>
                {props.tabs==="Now"&& <NowTab isLike={props.isLike} handleClick={handleClick} result={props.promiseInfo} city={props.city}/>}
                {props.tabs==="Details"&& <DetailsTab result={props.promiseInfo} city={props.city}/>}
                {props.tabs==="Forecast"&& <ForecastTab info={props.promiseInfoForecast} city={props.city}/>}
            </div>
            <div>
                <ul>
                    <li onClick={handleTab} className={`${props.tabs==="Now"&&"active"}`}>Now</li>
                    <li onClick={handleTab} className={`${props.tabs==="Details"&&"active"}`}>Details</li>
                    <li onClick={handleTab} className={`${props.tabs==="Forecast"&&"active"}`}>Forecast</li>
                </ul>
            </div>
        </div>
    )
}