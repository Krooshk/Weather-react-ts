import React, {useEffect} from "react";
import {getInfo} from "../getInfo";
import { useState } from 'react';
import Shape from "../assets/Shape.svg";
import Heart from "../assets/heart_like.svg";
import Cloud from "../assets/cloud.svg";

export function NowTab(props:{
    city:string;
    result:any;
    handleClick:()=>void;
    isLike:Boolean;
}) {



    function handleClick(){
        props.handleClick();
        console.log(1);
    }

    return (
        <div className={"NowTab"}>
            <div className="temperature-tab1">{props.result!==null?`${Math.round(props.result.main.temp)}°`:'t°'}</div>
            <div className="icon-weather"><img src={props.result!==null?`http://openweathermap.org/img/wn/${props.result.weather[0].icon}@2x.png`:Cloud} style={{ height: 100 }}  alt="cloud"/></div>
            <div className="city-tab1">
                <div className="city-now">{props.city||'City'}</div>
                <div className="shape" onClick={handleClick}><img src={props.isLike?Heart:Shape} style={{cursor:"pointer", width:"30px",}} alt="shape"/></div>
            </div>
        </div>
    )
}